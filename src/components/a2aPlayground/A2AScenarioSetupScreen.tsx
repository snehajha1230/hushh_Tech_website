/**
 * A2A Scenario Setup Screen (Screen 1)
 * 
 * Demo operator selects:
 * - Relying party (bank)
 * - User to verify (Ankit, etc.)
 * - Which A2A operations to demo
 */
'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Input,
  Select,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  Divider,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  A2AScenarioConfig,
  A2AScenarioSetupProps,
  DemoUserIdentifiers,
  ScenarioOperations,
  DEMO_RELYING_PARTIES,
  DEFAULT_SCENARIO_CONFIG,
} from '../../types/a2aPlayground';

/** Match `src/pages/home/ui.tsx` hero typography */
const playfair = { fontFamily: "'Playfair Display', serif" };
const manrope =
  '"Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

/** Home `border-gray-200/60` + iOS hairline */
const borderHairline = 'rgba(229, 231, 235, 0.6)';
const borderIos = '#E5E5EA';
/** Home feature cards: `bg-ios-gray-bg` */
const surfacePage = '#F5F5F7';
const hushhBlue = '#0066CC';

// =====================================================
// Country Options
// =====================================================

const COUNTRY_OPTIONS = [
  { value: 'US', label: 'United States' },
  { value: 'IN', label: 'India' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AE', label: 'UAE' },
  { value: 'SG', label: 'Singapore' },
];

const PHONE_CODES = [
  { value: '+1', label: '+1 (US)' },
  { value: '+91', label: '+91 (IN)' },
  { value: '+44', label: '+44 (UK)' },
  { value: '+971', label: '+971 (UAE)' },
  { value: '+65', label: '+65 (SG)' },
];

// =====================================================
// Component
// =====================================================

export const A2AScenarioSetupScreen: React.FC<A2AScenarioSetupProps> = ({
  onRunScenario,
}) => {
  // Form state
  const [selectedPartyId, setSelectedPartyId] = useState(
    DEFAULT_SCENARIO_CONFIG.relyingParty.id
  );
  const [user, setUser] = useState<DemoUserIdentifiers>(
    DEFAULT_SCENARIO_CONFIG.user
  );
  const [operations, setOperations] = useState<ScenarioOperations>(
    DEFAULT_SCENARIO_CONFIG.operations
  );

  // Get selected relying party
  const selectedParty = DEMO_RELYING_PARTIES.find(p => p.id === selectedPartyId) 
    || DEMO_RELYING_PARTIES[0];

  // Handle form submission
  const handleRun = () => {
    const config: A2AScenarioConfig = {
      relyingParty: selectedParty,
      user,
      operations,
    };
    onRunScenario(config);
  };

  // Check if at least one operation is selected
  const hasOperation = operations.verifyKycStatus || 
    operations.confirmKeyMatch || 
    operations.exportKycProfile;

  const fieldFocus = {
    borderColor: hushhBlue,
    boxShadow: `0 0 0 1px ${hushhBlue}`,
  };

  const inputSurface = {
    bg: 'white',
    border: '1px solid',
    borderColor: 'gray.200',
    color: 'gray.900',
    borderRadius: 'xl',
    fontFamily: manrope,
    _placeholder: { color: 'gray.400' },
    _hover: { borderColor: 'gray.400', bg: 'white' },
    _focus: { ...fieldFocus, bg: 'white' },
  };

  const selectSurface = {
    ...inputSurface,
    bgGradient: 'linear(to-b, gray.100, white)',
  };

  return (
    <Box
      minH="100vh"
      bg={surfacePage}
      py={{ base: 8, md: 10 }}
      fontFamily={manrope}
      className="antialiased text-gray-900 selection:bg-[#0066CC] selection:text-white"
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        {/* Header — Playfair hero + Manrope body (home page pattern) */}
        <VStack spacing={3} mb={{ base: 8, md: 10 }} textAlign="center">
          <Badge
            px={3}
            py={1}
            borderRadius="full"
            fontSize="10px"
            fontWeight="600"
            letterSpacing="0.14em"
            textTransform="uppercase"
            bg="rgba(0, 102, 204, 0.1)"
            color={hushhBlue}
            border="1px solid"
            borderColor="rgba(0, 102, 204, 0.25)"
          >
            A2A PROTOCOL DEMO
          </Badge>
          <Text
            as="h1"
            fontSize={{ base: '2.25rem', sm: '2.75rem', md: '3.25rem' }}
            lineHeight={1.1}
            fontWeight="normal"
            color="gray.900"
            letterSpacing="tight"
            style={playfair}
          >
            Agent-to-Agent <br />
            <Text
              as="span"
              color="gray.400"
              fontStyle="italic"
              fontWeight="light"
              style={playfair}
            >
              KYC Playground
            </Text>
          </Text>
          <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} fontWeight="light" maxW="lg" lineHeight="relaxed">
            Watch Bank KYC Copilot and Hushh KYC Agent collaborate 
            in real-time to verify identity and export KYC data.
          </Text>
        </VStack>

        {/* Main form card — white on home `ios-gray-bg` + home-style border */}
        <Box
          bg="white"
          borderRadius="2xl"
          p={{ base: 5, md: 8 }}
          border="1px solid"
          borderColor={borderHairline}
          boxShadow="0 8px 30px -4px rgba(0, 0, 0, 0.04)"
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 10 }} alignItems="start">
            <VStack
              spacing={8}
              align="stretch"
              bg="gray.50"
              borderRadius="xl"
              p={{ base: 5, md: 6 }}
              border="1px solid"
              borderColor="gray.100"
            >
              {/* Section 1: Relying Party */}
              <Box>
                <Text
                  fontSize="10px"
                  fontWeight="600"
                  color="gray.400"
                  mb={3}
                  textTransform="uppercase"
                  letterSpacing="0.16em"
                >
                  1. Choose Relying Party
                </Text>

                <FormControl>
                  <FormLabel color="gray.500" fontSize="sm" fontWeight="500" mb={2}>
                    Bank or Financial Institution
                  </FormLabel>
                  <Select
                    {...selectSurface}
                    value={selectedPartyId}
                    onChange={(e) => setSelectedPartyId(e.target.value)}
                  >
                    {DEMO_RELYING_PARTIES.map((party) => (
                      <option 
                        key={party.id} 
                        value={party.id}
                      >
                        {party.name} {party.description ? `– ${party.description}` : ''}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Divider borderColor="gray.200" display={{ base: 'block', lg: 'none' }} opacity={0.7} />

              {/* Section 2: User to Verify */}
              <Box>
                <Text
                  fontSize="10px"
                  fontWeight="600"
                  color="gray.400"
                  mb={3}
                  textTransform="uppercase"
                  letterSpacing="0.16em"
                >
                  2. User to Verify
                </Text>

                <VStack spacing={4}>
                  {/* Full Name */}
                  <FormControl>
                    <FormLabel color="gray.500" fontSize="sm" fontWeight="500" mb={2}>
                      Full Name
                    </FormLabel>
                    <Input
                      {...inputSurface}
                      value={user.fullName}
                      onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                      placeholder="Enter full name"
                    />
                  </FormControl>

                  {/* Phone */}
                  <FormControl>
                    <FormLabel color="gray.500" fontSize="sm" fontWeight="500" mb={2}>
                      Phone Number
                    </FormLabel>
                    <HStack align="start">
                      <Select
                        {...selectSurface}
                        value={user.phoneCountryCode}
                        onChange={(e) => setUser({ ...user, phoneCountryCode: e.target.value })}
                        w="140px"
                        flexShrink={0}
                      >
                        {PHONE_CODES.map((code) => (
                          <option 
                            key={code.value} 
                            value={code.value}
                          >
                            {code.label}
                          </option>
                        ))}
                      </Select>
                      <Input
                        {...inputSurface}
                        value={user.phoneNumber}
                        onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                        placeholder="Phone number"
                        flex={1}
                      />
                    </HStack>
                  </FormControl>

                  {/* Country */}
                  <FormControl>
                    <FormLabel color="gray.500" fontSize="sm" fontWeight="500" mb={2}>
                      Country
                    </FormLabel>
                    <Select
                      {...inputSurface}
                      value={user.country}
                      onChange={(e) => setUser({ ...user, country: e.target.value })}
                    >
                      {COUNTRY_OPTIONS.map((country) => (
                        <option 
                          key={country.value} 
                          value={country.value}
                        >
                          {country.label}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Email (Optional) */}
                  <FormControl>
                    <FormLabel color="gray.500" fontSize="sm" fontWeight="500" mb={2}>
                      Email (Optional)
                    </FormLabel>
                    <Input
                      {...inputSurface}
                      value={user.email || ''}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      placeholder="email@example.com"
                      type="email"
                    />
                  </FormControl>

                  {/* SSN Last 4 (for key match demo) */}
                  {operations.confirmKeyMatch && (
                    <FormControl>
                      <FormLabel color="gray.500" fontSize="sm" fontWeight="500" mb={2}>
                        SSN Last 4 Digits (for key match demo)
                      </FormLabel>
                      <Input
                        {...inputSurface}
                        value={user.ssnLast4 || ''}
                        onChange={(e) => setUser({ ...user, ssnLast4: e.target.value })}
                        placeholder="1234"
                        maxLength={4}
                      />
                      <Text fontSize="xs" color="gray.500" mt={1.5} lineHeight="short">
                        🔒 This is only used to demo VerifyFieldMatch – never shared in clear
                      </Text>
                    </FormControl>
                  )}
                </VStack>
              </Box>
            </VStack>

            <VStack
              spacing={6}
              align="stretch"
              bg="gray.50"
              borderRadius="xl"
              p={{ base: 5, md: 6 }}
              border="1px solid"
              borderColor="gray.100"
            >
              {/* Section 3: Operations */}
              <Box>
                <Text
                  fontSize="10px"
                  fontWeight="600"
                  color="gray.400"
                  mb={3}
                  textTransform="uppercase"
                  letterSpacing="0.16em"
                >
                  3. What should agents do?
                </Text>

                <VStack align="stretch" spacing={3}>
                  <Box
                    border="1px solid"
                    borderColor={borderHairline}
                    borderRadius="xl"
                    px={4}
                    py={3}
                    bg="white"
                    boxShadow="inset 0 0 0 0.5px rgba(0, 0, 0, 0.03)"
                  >
                    <Checkbox
                      isChecked={operations.verifyKycStatus}
                      onChange={(e) => setOperations({ 
                        ...operations, 
                        verifyKycStatus: e.target.checked 
                      })}
                      colorScheme="blue"
                      size="lg"
                      sx={{
                        '.chakra-checkbox__control': {
                          borderColor: borderIos,
                          _checked: {
                            bg: hushhBlue,
                            borderColor: hushhBlue,
                          },
                        },
                      }}
                    >
                      <VStack align="start" spacing={0} ml={1}>
                        <Text color="gray.900" fontSize="sm" fontWeight="600">
                          Verify KYC Status
                        </Text>
                        <Text color="gray.500" fontSize="xs" lineHeight="short" fontWeight="light">
                          CheckKYCStatus – Is this user verified?
                        </Text>
                      </VStack>
                    </Checkbox>
                  </Box>

                  <Box
                    border="1px solid"
                    borderColor={borderHairline}
                    borderRadius="xl"
                    px={4}
                    py={3}
                    bg="white"
                    boxShadow="inset 0 0 0 0.5px rgba(0, 0, 0, 0.03)"
                  >
                    <Checkbox
                      isChecked={operations.confirmKeyMatch}
                      onChange={(e) => setOperations({ 
                        ...operations, 
                        confirmKeyMatch: e.target.checked 
                      })}
                      colorScheme="blue"
                      size="lg"
                      sx={{
                        '.chakra-checkbox__control': {
                          borderColor: borderIos,
                          _checked: {
                            bg: hushhBlue,
                            borderColor: hushhBlue,
                          },
                        },
                      }}
                    >
                      <VStack align="start" spacing={0} ml={1}>
                        <Text color="gray.900" fontSize="sm" fontWeight="600">
                          Confirm Key Match
                        </Text>
                        <Text color="gray.500" fontSize="xs" lineHeight="short" fontWeight="light">
                          VerifyFieldMatch – Does SSN last4 match?
                        </Text>
                      </VStack>
                    </Checkbox>
                  </Box>

                  <Box
                    border="1px solid"
                    borderColor={borderHairline}
                    borderRadius="xl"
                    px={4}
                    py={3}
                    bg="white"
                    boxShadow="inset 0 0 0 0.5px rgba(0, 0, 0, 0.03)"
                  >
                    <Checkbox
                      isChecked={operations.exportKycProfile}
                      onChange={(e) => setOperations({ 
                        ...operations, 
                        exportKycProfile: e.target.checked 
                      })}
                      colorScheme="blue"
                      size="lg"
                      sx={{
                        '.chakra-checkbox__control': {
                          borderColor: borderIos,
                          _checked: {
                            bg: hushhBlue,
                            borderColor: hushhBlue,
                          },
                        },
                      }}
                    >
                      <VStack align="start" spacing={0} ml={1}>
                        <Text color="gray.900" fontSize="sm" fontWeight="600">
                          Export KYC Profile
                        </Text>
                        <Text color="gray.500" fontSize="xs" lineHeight="short" fontWeight="light">
                          ExportKYCProfile – Get normalized JSON profile
                        </Text>
                      </VStack>
                    </Checkbox>
                  </Box>
                </VStack>
              </Box>

              <Button
                size="lg"
                onClick={handleRun}
                isDisabled={!user.fullName || !hasOperation}
                w="100%"
                h="56px"
                fontSize="md"
                fontWeight="600"
                letterSpacing="wide"
                borderRadius="xl"
                bg="black"
                color="white"
                fontFamily={manrope}
                _hover={{
                  bg: 'blackAlpha.900',
                  transform: 'translateY(-1px)',
                  boxShadow: 'lg',
                }}
                _active={{ bg: 'black', transform: 'translateY(0)' }}
                _disabled={{
                  bg: 'gray.200',
                  color: 'gray.500',
                  cursor: 'not-allowed',
                  opacity: 1,
                }}
                transition="all 0.2s ease-out"
              >
                🚀 Run A2A KYC Scenario
              </Button>

              <Text 
                fontSize="xs" 
                color="gray.500" 
                textAlign="center"
                lineHeight="short"
              >
                This will simulate a real A2A conversation between {selectedParty.name} 
                and Hushh KYC Agent.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>

        <Text 
          fontSize="xs" 
          color="gray.400" 
          textAlign="center" 
          mt={8}
        >
          A2A Protocol Demo • Hushh KYC Network • ADFW 2025
        </Text>
      </Container>
    </Box>
  );
};

export default A2AScenarioSetupScreen;
