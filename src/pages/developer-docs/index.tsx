import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  Code,
  Badge,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiMenu, FiHelpCircle } from 'react-icons/fi';
import { SiApple, SiAndroid, SiReact } from 'react-icons/si';

/** Matches Tailwind `hushh-blue` — primary accent used across marketing pages */
const PRIMARY_COLOR = '#0066CC';

const playfair = { fontFamily: "'Playfair Display', serif" } as const;

/** Accordion order: Apple (iOS) → Android → React web */
const APP_STORE_GUIDE_ACCORDION_INDEX = 0;
const ANDROID_GUIDE_ACCORDION_INDEX = 1;
const REACT_GUIDE_ACCORDION_INDEX = 2;
const GUIDE_STEP_STAGGER_MS = 550;

/** React Web App guide steps — copy unchanged */
const REACT_WEB_APP_STEPS = [
  {
    number: 1,
    title: 'Install Dependencies',
    description:
      'Install all npm packages. Only needed first time or when package.json changes.',
    code: `# Install all dependencies from package.json
npm install

# This creates node_modules/ folder with all packages`,
  },
  {
    number: 2,
    title: 'Create Production Build',
    description:
      'Build optimized, minified files for production. Uses Vite bundler. Also generates sitemap.xml and robots.txt via post-build scripts.',
    code: `# Build command (defined in package.json)
npm run build

# What this runs:
# 1. vite build (creates dist/ folder with optimized JS/CSS)
# 2. node scripts/generate-sitemap.js
# 3. node scripts/generate-robots.js

# Output: dist/ folder (~4.8MB JS bundle gzipped)`,
  },
  {
    number: 3,
    title: 'Test Locally Before Deploy',
    description:
      'Preview the production build locally to verify everything works correctly.',
    code: `# Start local preview server
npm run preview

# Opens at http://localhost:4173`,
  },
  {
    number: 4,
    title: 'Deploy to Google Cloud',
    description:
      'Push to GitHub and GitHub Actions deploys to Cloud Run. main updates production, develop updates UAT.',
    code: `# Commit and push changes
git add .
git commit -m "Your commit message"
git push

# Production deploys from main -> GitHub Actions -> Cloud Run
# UAT deploys from develop -> GitHub Actions -> Cloud Run
# Check status in GitHub Actions and Google Cloud Run revisions`,
  },
] as const;

/** App Store (iOS) release guide — four steps aligned with sidebar “App Store Guide” */
const APP_STORE_STEPS = [
  {
    number: 1,
    title: 'Apple Developer & Xcode setup',
    description:
      'Join the Apple Developer Program, install Xcode from the Mac App Store, and sign in under Xcode > Settings > Accounts. Install command-line tools if prompted.',
    code: `# Check Xcode and SDKs
xcodebuild -version
xcodebuild -showsdks`,
  },
  {
    number: 2,
    title: 'Open the iOS project & configure signing',
    description:
      'Open the Hushh iOS workspace (.xcworkspace if CocoaPods is used). Set bundle identifier, version, and build. Under Signing & Capabilities, pick your team; use automatic signing for day-to-day builds and distribution certs for App Store archives.',
    code: `# If the repo uses CocoaPods (paths vary by project)
cd ios/App
pod install
open App.xcworkspace`,
  },
  {
    number: 3,
    title: 'Archive a release build',
    description:
      'Select “Any iOS Device (arm64)” as the run destination. Use Product > Archive. In Organizer, validate the archive for App Store Connect and resolve signing or asset issues before upload.',
    code: `# Optional CLI archive (replace Workspace, Scheme, paths)
xcodebuild -workspace App.xcworkspace \\
  -scheme YourAppScheme \\
  -configuration Release \\
  -archivePath build/Hushh.xcarchive \\
  archive`,
  },
  {
    number: 4,
    title: 'Upload & submit in App Store Connect',
    description:
      'Distribute the archive to App Store Connect (Organizer or Transporter). Assign the build to a version, complete export compliance and privacy questionnaires, then submit for review or distribute via TestFlight first.',
    code: `# After upload, pick the build in App Store Connect
# TestFlight → Internal/External testing, or App Store → Submit for Review
# Many teams automate upload with Xcode Cloud or fastlane deliver`,
  },
] as const;

/** Google Play (Android) release guide — four steps aligned with sidebar “Android Guide” */
const ANDROID_STEPS = [
  {
    number: 1,
    title: 'Android Studio & Gradle setup',
    description:
      'Install Android Studio and required SDK platforms/build-tools. Open the Hushh Android project and wait for Gradle sync. Accept SDK licenses if the build prompts you.',
    code: `# Typical environment check
java -version

# From your Android project root (folder name may vary)
cd android
chmod +x gradlew  # Unix: ensure wrapper is executable`,
  },
  {
    number: 2,
    title: 'Configure signing & version codes',
    description:
      'Point release signing at your keystore (use env vars or a local.properties that is gitignored—never commit keys). Set applicationId, versionCode, and versionName to match the Play Console listing.',
    code: `# Build a Play-ready .aab (preferred over APK for store)
./gradlew bundleRelease

# APK for sideload / some testers
./gradlew assembleRelease`,
  },
  {
    number: 3,
    title: 'Test the release artifact',
    description:
      'Install the release build on hardware or an emulator. Re-check auth, deep links, and API base URLs against production. Use internal testing tracks or adb for smoke tests before wider rollout.',
    code: `# Example: install a release APK with adb
adb install -r app/build/outputs/apk/release/app-release.apk`,
  },
  {
    number: 4,
    title: 'Publish on Google Play Console',
    description:
      'Open the Hushh app in Play Console. Create a release in Internal testing, Closed testing, or Production. Upload the .aab, complete the Data safety form and store listing, then roll out.',
    code: `# Default bundle output path (module name may differ)
# android/app/build/outputs/bundle/release/app-release.aab

# Upload via Play Console UI or a CI plugin (e.g. Gradle Play Publisher)`,
  },
] as const;

const GUIDE_STEP_SETS = [APP_STORE_STEPS, ANDROID_STEPS, REACT_WEB_APP_STEPS] as const;

// Navigation items (after Getting Started: Apple → Android → React)
const navItems = [
  { id: 'home', label: 'Getting Started', icon: FiHome },
  { id: 'appstore', label: 'App Store Guide', icon: SiApple },
  { id: 'android', label: 'Android Guide', icon: SiAndroid },
  { id: 'react', label: 'React Guide', icon: SiReact },
];

// Sidebar Component
const Sidebar = ({ activeSection, setActiveSection, isMobile = false }: {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile?: boolean;
}) => {
  return (
    <VStack align="stretch" spacing={1} py={6} px={4} className="font-sans">
      {/* Header */}
      <Box px={3} pb={4}>
        <Text
          fontSize="10px"
          fontWeight="medium"
          color="gray.400"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          Docs Navigation
        </Text>
        <Text fontSize="sm" color="gray.500" mt={1} fontWeight="light">
          Build Guides
        </Text>
      </Box>

      {/* Nav Items */}
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Box
            key={item.id}
            as="button"
            onClick={() => setActiveSection(item.id)}
            display="flex"
            alignItems="center"
            gap={3}
            px={3}
            py={2.5}
            borderRadius="xl"
            bg={isActive ? `${PRIMARY_COLOR}14` : 'transparent'}
            borderLeft={isActive ? `3px solid ${PRIMARY_COLOR}` : '3px solid transparent'}
            color={isActive ? 'gray.900' : 'gray.500'}
            fontWeight={isActive ? 'semibold' : 'medium'}
            fontSize="sm"
            transition="all 0.25s ease"
            _hover={{
              bg: isActive ? `${PRIMARY_COLOR}14` : 'white',
              color: 'gray.900',
              boxShadow: isActive ? undefined : '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
            w="full"
            textAlign="left"
          >
            <Icon 
              as={item.icon} 
              boxSize={5} 
              color={isActive ? PRIMARY_COLOR : 'gray.400'}
            />
            <Text>{item.label}</Text>
          </Box>
        );
      })}

      {/* Resources Section */}
      <Box mt={4} pt={4} className="border-t border-gray-200/60">
        <Box px={3} pb={2}>
          <Text
            fontSize="10px"
            fontWeight="medium"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            Resources
          </Text>
        </Box>
        <Box
          as="a"
          href="/faq"
          display="flex"
          alignItems="center"
          gap={3}
          px={3}
          py={2.5}
          borderRadius="xl"
          color="gray.500"
          fontSize="sm"
          transition="all 0.25s ease"
          _hover={{ bg: 'white', color: 'gray.900', boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
        >
          <Icon as={FiHelpCircle} boxSize={5} />
          <Text>FAQ</Text>
        </Box>
      </Box>
    </VStack>
  );
};

// Step Component — `variant="grid"` fills a symmetric grid cell with scrollable code
const Step = ({
  number,
  title,
  description,
  code,
  variant = 'inline',
}: {
  number: number;
  title: string;
  description: string;
  code?: string;
  variant?: 'inline' | 'grid';
}) => {
  const isGrid = variant === 'grid';
  return (
    <Box
      w="full"
      h={isGrid ? 'full' : undefined}
      minH={isGrid ? { base: '280px', md: '100%' } : undefined}
      display={isGrid ? 'flex' : undefined}
      flexDirection={isGrid ? 'column' : undefined}
      className="rounded-2xl border border-gray-200/60 bg-ios-gray-bg p-4 shadow-soft transition-all duration-300 ease-out hover:border-hushh-blue/30 hover:shadow-[0_12px_40px_-12px_rgba(0,102,204,0.12)] sm:p-5"
    >
      <HStack align="start" spacing={4} flexShrink={0}>
        <Flex
          flexShrink={0}
          w={8}
          h={8}
          borderRadius="full"
          bg={`${PRIMARY_COLOR}18`}
          color={PRIMARY_COLOR}
          fontWeight="bold"
          fontSize="sm"
          align="center"
          justify="center"
          className="ring-1 ring-hushh-blue/20"
        >
          {number}
        </Flex>
        <VStack align="start" spacing={1} flex={1} minW={0}>
          <Text fontWeight="semibold" color="gray.900" className="font-sans tracking-tight">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="light">
            {description}
          </Text>
        </VStack>
      </HStack>
      {code && (
        <Box
          flex={isGrid ? 1 : undefined}
          minH={isGrid ? 0 : undefined}
          mt={3}
          overflow={isGrid ? 'auto' : undefined}
          w="full"
        >
          <Code
            display="block"
            w="full"
            p={3}
            borderRadius="xl"
            className="bg-ios-dark text-ios-green border border-white/10"
            fontSize="xs"
            whiteSpace="pre-wrap"
            overflowX="auto"
          >
            {code}
          </Code>
        </Box>
      )}
    </Box>
  );
};

type GuideStep = (typeof REACT_WEB_APP_STEPS)[number];

/** Shared 2×2 grid for React / App Store / Android step reveal */
const GuideStepsGrid = ({ steps, visibleCount }: { steps: readonly GuideStep[]; visibleCount: number }) => (
  <Grid
    w="full"
    templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
    templateRows={{
      base: 'none',
      md: 'repeat(2, minmax(0, 1fr))',
    }}
    gap={{ base: 4, md: 5 }}
    minH={{ base: 'auto', md: 'min(72vh, 720px)' }}
    maxW="1400px"
    mx="auto"
  >
    {steps.map((step) =>
      visibleCount >= step.number ? (
        <Box key={step.number} minW={0} minH={0} className="animate-fadeIn h-full">
          <Step
            variant="grid"
            number={step.number}
            title={step.title}
            description={step.description}
            code={step.code}
          />
        </Box>
      ) : null,
    )}
  </Grid>
);

// Main Content Component
const MainContent = ({ activeSection }: { activeSection: string }) => {
  const [accordionIndex, setAccordionIndex] = useState<number[]>([APP_STORE_GUIDE_ACCORDION_INDEX]);
  const [visibleStepsByGuide, setVisibleStepsByGuide] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    setVisibleStepsByGuide({
      0: accordionIndex.includes(0) ? 1 : 0,
      1: accordionIndex.includes(1) ? 1 : 0,
      2: accordionIndex.includes(2) ? 1 : 0,
    });

    GUIDE_STEP_SETS.forEach((steps, idx) => {
      if (!accordionIndex.includes(idx)) return;
      for (let i = 2; i <= steps.length; i++) {
        const delay = (i - 1) * GUIDE_STEP_STAGGER_MS;
        timeouts.push(
          setTimeout(() => {
            setVisibleStepsByGuide((s) => ({ ...s, [idx]: i }));
          }, delay),
        );
      }
    });

    return () => timeouts.forEach(clearTimeout);
  }, [accordionIndex]);

  /** Sidebar labels → expand matching guide and scroll into view */
  const skipNavSyncRef = useRef(true);
  useEffect(() => {
    if (skipNavSyncRef.current) {
      skipNavSyncRef.current = false;
      return;
    }
    const accBySection: Record<string, number | undefined> = {
      appstore: APP_STORE_GUIDE_ACCORDION_INDEX,
      android: ANDROID_GUIDE_ACCORDION_INDEX,
      react: REACT_GUIDE_ACCORDION_INDEX,
    };
    const acc = accBySection[activeSection];
    if (activeSection === 'home') {
      document.getElementById('devdocs-home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (acc === undefined) return;
    setAccordionIndex((prev) => (prev.includes(acc) ? prev : [...prev, acc]));
    const t = window.setTimeout(() => {
      document.getElementById(`devdocs-accordion-${acc}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(t);
  }, [activeSection]);

  return (
    <Box
      w="full"
      className="font-sans antialiased text-gray-900 selection:bg-hushh-blue selection:text-white"
    >
      <Box
        id="devdocs-home"
        maxW="900px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        pt={{ base: 6, md: 10 }}
        pb={6}
      >
      {/* Breadcrumbs */}
      <HStack spacing={2} mb={8} flexWrap="wrap">
        <Text fontSize="sm" color="gray.400" fontWeight="light">
          Home
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="light">
          ›
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="light">
          Guides
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="light">
          ›
        </Text>
        <Badge
          bg={`${PRIMARY_COLOR}14`}
          color={PRIMARY_COLOR}
          px={3}
          py={1}
          borderRadius="full"
          fontSize="10px"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="widest"
          borderWidth="1px"
          borderColor={`${PRIMARY_COLOR}33`}
        >
          Building Apps
        </Badge>
      </HStack>

      {/* Page Title — matches home hero h1 (Investing in the Future.) */}
      <VStack align="start" spacing={4} mb={10}>
        <Box
          as="h1"
          className="text-[2.75rem] leading-[1.1] font-normal text-black tracking-tight font-serif sm:text-[3.25rem] lg:text-[4rem]"
          style={playfair}
        >
          How to Build <br />{' '}
          <span className="text-gray-400 italic font-light">Your App</span>{' '}
          🚀
        </Box>
        <Text
          fontSize={{ base: 'sm', sm: 'base' }}
          color="gray.500"
          fontWeight="light"
          maxW="2xl"
          lineHeight="relaxed"
        >
          This guide explains how to build and deploy the Hushh app for iOS, Android, and Web. 
          Follow the step-by-step instructions with the exact commands and scripts used.
        </Text>
      </VStack>
      </Box>

      {/* Accordions — full width of main column for symmetrical step grid */}
      <Box w="full" px={{ base: 4, md: 6, lg: 10 }} pb={{ base: 8, md: 10 }}>
        <Accordion
          allowMultiple
          index={accordionIndex}
          onChange={(next: number | number[]) =>
            setAccordionIndex(Array.isArray(next) ? next : [next])
          }
        >
          {/* App Store (iOS) — first */}
          <AccordionItem
            id="devdocs-accordion-0"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="2xl"
            mb={4}
            overflow="hidden"
            bg="white"
            boxShadow="none"
            className="border-gray-200/60 shadow-soft transition-all duration-300 hover:border-hushh-blue/25 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)]"
          >
            <AccordionButton
              py={5}
              px={6}
              bg="#F5F5F7"
              _hover={{ bg: 'rgba(255,255,255,0.92)' }}
              _expanded={{ bg: '#F5F5F7' }}
            >
              <HStack spacing={4} flex={1}>
                <Flex
                  w={10}
                  h={10}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  fontSize="xl"
                  className="bg-hushh-blue/10 ring-1 ring-hushh-blue/20"
                >
                  <Icon as={SiApple} color={PRIMARY_COLOR} boxSize={5} />
                </Flex>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold" fontSize="lg" color="gray.900" style={playfair}>
                    How to Build for the App Store (iOS)
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="light">
                    Xcode archive, signing, and App Store Connect submission
                  </Text>
                </VStack>
              </HStack>
              <AccordionIcon color="gray.400" />
            </AccordionButton>
            <AccordionPanel
              py={{ base: 5, md: 6 }}
              px={{ base: 4, md: 6, lg: 8 }}
              borderTop="1px solid"
              borderColor="gray.200"
              className="border-gray-200/60 bg-white"
            >
              <GuideStepsGrid steps={APP_STORE_STEPS} visibleCount={visibleStepsByGuide[0] ?? 0} />
            </AccordionPanel>
          </AccordionItem>

          {/* Android / Play Store — second */}
          <AccordionItem
            id="devdocs-accordion-1"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="2xl"
            mb={4}
            overflow="hidden"
            bg="white"
            boxShadow="none"
            className="border-gray-200/60 shadow-soft transition-all duration-300 hover:border-hushh-blue/25 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)]"
          >
            <AccordionButton
              py={5}
              px={6}
              bg="#F5F5F7"
              _hover={{ bg: 'rgba(255,255,255,0.92)' }}
              _expanded={{ bg: '#F5F5F7' }}
            >
              <HStack spacing={4} flex={1}>
                <Flex
                  w={10}
                  h={10}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  fontSize="xl"
                  className="bg-hushh-blue/10 ring-1 ring-hushh-blue/20"
                >
                  <Icon as={SiAndroid} color={PRIMARY_COLOR} boxSize={5} />
                </Flex>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold" fontSize="lg" color="gray.900" style={playfair}>
                    How to Build for Google Play (Android)
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="light">
                    Gradle release bundle, signing, and Play Console rollout
                  </Text>
                </VStack>
              </HStack>
              <AccordionIcon color="gray.400" />
            </AccordionButton>
            <AccordionPanel
              py={{ base: 5, md: 6 }}
              px={{ base: 4, md: 6, lg: 8 }}
              borderTop="1px solid"
              borderColor="gray.200"
              className="border-gray-200/60 bg-white"
            >
              <GuideStepsGrid steps={ANDROID_STEPS} visibleCount={visibleStepsByGuide[1] ?? 0} />
            </AccordionPanel>
          </AccordionItem>

          {/* React web — third */}
          <AccordionItem
            id="devdocs-accordion-2"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="2xl"
            mb={4}
            overflow="hidden"
            bg="white"
            boxShadow="none"
            className="border-gray-200/60 shadow-soft transition-all duration-300 hover:border-hushh-blue/25 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)]"
          >
            <AccordionButton
              py={5}
              px={6}
              bg="#F5F5F7"
              _hover={{ bg: 'rgba(255,255,255,0.92)' }}
              _expanded={{ bg: '#F5F5F7' }}
            >
              <HStack spacing={4} flex={1}>
                <Flex
                  w={10}
                  h={10}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  fontSize="2xl"
                  className="bg-hushh-blue/10 ring-1 ring-hushh-blue/20"
                >
                  ⚛️
                </Flex>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold" fontSize="lg" color="gray.900" style={playfair}>
                    How to Build React Web App
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="light">
                    Production build for website deployment
                  </Text>
                </VStack>
              </HStack>
              <AccordionIcon color="gray.400" />
            </AccordionButton>
            <AccordionPanel
              py={{ base: 5, md: 6 }}
              px={{ base: 4, md: 6, lg: 8 }}
              borderTop="1px solid"
              borderColor="gray.200"
              className="border-gray-200/60 bg-white"
            >
              <GuideStepsGrid steps={REACT_WEB_APP_STEPS} visibleCount={visibleStepsByGuide[2] ?? 0} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }} pb={{ base: 10, md: 12 }}>
      {/* Feedback Section */}
      <Box
        mt={12}
        p={{ base: 5, md: 8 }}
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
        className="border-gray-200/60 bg-ios-gray-bg shadow-soft transition-all duration-300 hover:border-hushh-blue/25 hover:shadow-[0_12px_40px_-12px_rgba(0,102,204,0.1)]"
      >
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <VStack align="start" spacing={1}>
            <Text fontWeight="semibold" color="gray.900" style={playfair}>
              Was this guide helpful? 🤔
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="light">
              We value your feedback!
            </Text>
          </VStack>
          <HStack spacing={3}>
            <Box
              as="button"
              px={4}
              py={2}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="xl"
              fontSize="sm"
              fontWeight="medium"
              transition="all 0.25s ease"
              className="border-gray-200/80 hover:border-ios-green/50 hover:shadow-sm active:scale-[0.98]"
              _hover={{ borderColor: '#34C759' }}
            >
              👍 Yes
            </Box>
            <Box
              as="button"
              px={4}
              py={2}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="xl"
              fontSize="sm"
              fontWeight="medium"
              transition="all 0.25s ease"
              className="border-gray-200/80 hover:border-ios-red/50 hover:shadow-sm active:scale-[0.98]"
              _hover={{ borderColor: '#FF3B30' }}
            >
              👎 No
            </Box>
          </HStack>
        </HStack>
      </Box>
      </Box>
    </Box>
  );
};

// Main Page Component
const DeveloperDocsPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex minH="100vh" bg="white" className="antialiased text-gray-900 selection:bg-hushh-blue selection:text-white">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box
          w="280px"
          flexShrink={0}
          borderRight="1px solid"
          borderColor="gray.200"
          position="sticky"
          top="80px"
          h="calc(100vh - 80px)"
          overflowY="auto"
          className="border-gray-200/60 bg-ios-gray-bg"
        >
          <Sidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
        </Box>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          aria-label="Open menu"
          icon={<FiMenu />}
          position="fixed"
          top="100px"
          left={4}
          zIndex={10}
          size="lg"
          bg="white"
          boxShadow="sm"
          borderRadius="full"
          onClick={onOpen}
          className="border border-gray-200/60 shadow-soft hover:border-hushh-blue/40 hover:shadow-md transition-all duration-300"
        />
      )}

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="bg-ios-gray-bg">
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <Sidebar 
              activeSection={activeSection} 
              setActiveSection={(section) => {
                setActiveSection(section);
                onClose();
              }}
              isMobile
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box flex={1} bg="white" overflowY="auto" className="bg-white">
        <MainContent activeSection={activeSection} />
      </Box>
    </Flex>
  );
};

export default DeveloperDocsPage;
