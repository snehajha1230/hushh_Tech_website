import React from "react";
import img from "../../files/img.png";
import img2 from "../../files/img (1).png";
import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";

/** Matches home (`src/pages/home/ui.tsx`): Playfair headings + Manrope body */
const playfair = { fontFamily: "'Playfair Display', serif" };
const bodyFont = '"Manrope", "Inter", system-ui, sans-serif';

const sectionBandProps = {
  bg: "#F5F5F5",
  px: 4,
};

const cardShellProps = {
  bg: "white",
  borderRadius: "2xl",
  borderWidth: "1px",
  borderColor: "gray.100",
  boxShadow: "sm",
};

export default function Leadership() {
  return (
    <Box bg="white" fontFamily={bodyFont} color="gray.900">
      {/* Hero Section */}
      <Box pt={{ base: 16, md: 24 }} px={4} textAlign="center">
        <Container maxW="container.lg" mt={{ md: 16, base: 8 }}>
          <Heading
            as="h1"
            fontSize={{ base: "2.75rem", sm: "3.25rem", md: "4rem" }}
            fontWeight="400"
            mb={{ md: 6, base: 4 }}
            lineHeight="1.1"
            letterSpacing="-0.02em"
            color="#000000"
            style={playfair}
          >
            Empowering Wealth Creation with{" "}
            <Text as="span" fontWeight="300" fontStyle="italic" color="gray.400" display="inline">
              Integrity and Innovation
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "sm", sm: "base", md: "lg" }}
            color="gray.500"
            fontWeight="300"
            maxW="3xl"
            mx="auto"
            mb={{ base: 4, md: 6 }}
            lineHeight="relaxed"
          >
            We blend quantitative expertise with ethical investment practices to deliver personalized financial solutions.
          </Text>
        </Container>
      </Box>

      {/* Our Mission Section */}
      <Box pb={{ base: 12, md: 16 }} pt={{ base: 2, md: 4 }} {...sectionBandProps}>
        <Container maxW="container.lg">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mb={8}
            fontWeight="400"
            textAlign="center"
            letterSpacing="-0.02em"
            color="#000000"
            style={playfair}
          >
            Our Mission
          </Heading>

          <Box {...cardShellProps} p={{ base: 6, md: 10 }} mb={{ md: "8rem", base: 12 }}>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" fontWeight="300" mb={6} lineHeight="tall">
              At Hushh Technologies LLC, our mission is to democratize access to sophisticated investment strategies by leveraging cutting-edge
              artificial intelligence and advanced mathematical models. We are committed to generating consistent, risk-adjusted returns while
              maintaining the highest standards of transparency and ethical conduct.
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" fontWeight="300" mb={6} lineHeight="tall">
              We believe that through the power of data science and machine learning, we can unlock investment opportunities that were previously
              available only to institutional investors, making them accessible to individual investors and smaller institutions alike.
            </Text>
          </Box>

          {/* Unique Approach Section */}
          <Heading
            mt={{ md: 10, base: 5 }}
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="400"
            mb={8}
            textAlign="center"
            letterSpacing="-0.02em"
            color="#000000"
            style={playfair}
          >
            Unique Approach to Investment Management
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} mb={8} color="gray.600" fontWeight="300" lineHeight="relaxed">
            At{" "}
            <Text as="span" fontWeight="500" color="gray.800">
              Hushh Technologies
            </Text>
            , we combine the art of investment with the science of technology:
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6 }} mb={16}>
            <Box {...cardShellProps} p={{ base: 6, md: 8 }}>
              <Heading as="h3" fontSize="xl" color="#000000" mb={4} fontWeight="500" style={playfair}>
                Differentiation in Investment Approach
              </Heading>
              <Text color="gray.600" fontWeight="300" fontSize="md" lineHeight="relaxed">
                Unlike traditional funds that rely on speculative returns, Hushh combines high-frequency options income with disciplined,
                data-driven long-term growth. We prioritize stability, focusing on high-FCF SPX10 companies that represent the backbone of global markets.
              </Text>
            </Box>

            <Box {...cardShellProps} p={{ base: 6, md: 8 }}>
              <Heading as="h3" fontSize="xl" color="#000000" mb={4} fontWeight="500" style={playfair}>
                Math-Driven Decision Making
              </Heading>
              <Text color="gray.600" fontWeight="300" fontSize="md" lineHeight="relaxed">
                Every strategy is informed by rigorous quantitative analysis, ensuring precision and accuracy in our investment decisions.
              </Text>
            </Box>

            <Box {...cardShellProps} p={{ base: 6, md: 8 }}>
              <Heading as="h3" fontSize="xl" color="#000000" mb={4} fontWeight="500" style={playfair}>
                AI-Powered Insights
              </Heading>
              <Text color="gray.600" fontWeight="300" fontSize="md" lineHeight="relaxed">
                Leveraging the latest advancements in machine learning, we identify market inefficiencies and capitalize on opportunities in real-time.
              </Text>
            </Box>

            <Box {...cardShellProps} p={{ base: 6, md: 8 }}>
              <Heading as="h3" fontSize="xl" color="#000000" mb={4} fontWeight="500" style={playfair}>
                Transparency You Can Trust
              </Heading>
              <Text color="gray.600" fontWeight="300" fontSize="md" lineHeight="relaxed">
                Clear communication and a human-centric approach to wealth creation ensures you always understand our strategies and performance.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Leadership Team Section */}
      <Box py={{ base: 12, md: 16 }} px={4} bg="white">
        <Container maxW="container.lg">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="400"
            mb={4}
            textAlign="center"
            letterSpacing="-0.02em"
            color="#000000"
            style={playfair}
          >
            Our Leadership Team
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.500" fontWeight="300" maxW="3xl" mx="auto" mb={12} textAlign="center" lineHeight="relaxed">
            At Hushh Technologies LLC, our leadership team combines expertise in technology, finance, and strategy to redefine wealth creation.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} alignItems="stretch">
            {/* Manish Sainani */}
            <Flex
              {...cardShellProps}
              direction={{ base: "column", sm: "row" }}
              align={{ base: "center", sm: "flex-start" }}
              textAlign={{ base: "center", sm: "left" }}
              p={{ base: 6, md: 8 }}
              gap={{ base: 6, sm: 8 }}
              h="full"
              transition="box-shadow 0.2s ease"
              _hover={{ boxShadow: "md" }}
            >
              <Box
                flexShrink={0}
                w={{ base: "140px", sm: "160px" }}
                h={{ base: "140px", sm: "160px" }}
                borderRadius="full"
                overflow="hidden"
                borderWidth="1px"
                borderColor="gray.200"
              >
                <Image src={img} alt="Manish Sainani" w="full" h="full" objectFit="cover" />
              </Box>

              <Box flex="1" minW={0}>
                <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} mb={2} color="#000000" fontWeight="400" style={playfair}>
                  Manish <Text as="span">Sainani</Text>
                </Heading>

                <Text color="gray.500" fontWeight="400" fontSize="sm" textTransform="uppercase" letterSpacing="wider" mb={4}>
                  Founder & CEO
                </Text>

                <Text color="gray.600" fontWeight="300" fontSize="md" lineHeight="relaxed">
                  With over a decade of leadership at Google, Microsoft, and Splunk, Manish brings unmatched expertise in AI, machine learning, and
                  data-driven innovation. His vision drives Hushh&apos;s mission to empower investors with sustainable, technology-powered wealth strategies.
                </Text>
              </Box>
            </Flex>

            {/* Justin Donaldson */}
            <Flex
              {...cardShellProps}
              direction={{ base: "column", sm: "row" }}
              align={{ base: "center", sm: "flex-start" }}
              textAlign={{ base: "center", sm: "left" }}
              p={{ base: 6, md: 8 }}
              gap={{ base: 6, sm: 8 }}
              h="full"
              transition="box-shadow 0.2s ease"
              _hover={{ boxShadow: "md" }}
            >
              <Box
                flexShrink={0}
                w={{ base: "140px", sm: "160px" }}
                h={{ base: "140px", sm: "160px" }}
                borderRadius="full"
                overflow="hidden"
                borderWidth="1px"
                borderColor="gray.200"
              >
                <Image src={img2} alt="Justin Donaldson" w="full" h="full" objectFit="cover" />
              </Box>

              <Box flex="1" minW={0}>
                <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} mb={2} color="#000000" fontWeight="400" style={playfair}>
                  Justin <Text as="span">Donaldson</Text>
                </Heading>

                <Text color="gray.500" fontWeight="400" fontSize="sm" textTransform="uppercase" letterSpacing="wider" mb={4}>
                  Chief Scientist & Investment Strategist
                </Text>

                <Text color="gray.600" fontWeight="300" fontSize="md" lineHeight="relaxed">
                  Justin leads Hushh&apos;s scientific and strategic investment approaches. As the architect behind proprietary options strategies like
                  &quot;Sell the Wall,&quot; he uses advanced quantitative models to deliver consistent, risk-optimized returns.
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Investment Philosophy Section */}
      <Box py={{ base: 12, md: 16 }} {...sectionBandProps}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6 }}>
            <Box {...cardShellProps} className="bg-white p-8 sm:p-10 md:p-12 hover:shadow-md transition-all duration-300">
              <Flex className="flex items-start gap-5 sm:gap-6">
                <Box className="text-3xl sm:text-4xl mt-1 shrink-0" aria-hidden>
                  💰
                </Box>
                <Box className="flex-1 min-w-0">
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="500"
                    className="text-black mb-4 sm:mb-6"
                    style={playfair}
                  >
                    Focus on Free Cash Flow
                  </Heading>
                  <Text className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
                    We prioritize companies with strong, predictable free cash flow generation and healthy fundamentals. These are the engines of sustainable returns and perpetual income.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box {...cardShellProps} className="bg-white p-8 sm:p-10 md:p-12 hover:shadow-md transition-all duration-300">
              <Flex className="flex items-start gap-5 sm:gap-6">
                <Box className="text-3xl sm:text-4xl mt-1 shrink-0" aria-hidden>
                  🏢
                </Box>
                <Box className="flex-1 min-w-0">
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="500"
                    className="text-black mb-4 sm:mb-6"
                    style={playfair}
                  >
                    Long-Term Ownership
                  </Heading>
                  <Text className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
                    &quot;We do not gamble on companies. We own the best businesses on the planet.&quot; Our approach is to take significant ownership stakes and hold them to compound value over decades.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box {...cardShellProps} className="bg-white p-8 sm:p-10 md:p-12 hover:shadow-md transition-all duration-300">
              <Flex className="flex items-start gap-5 sm:gap-6">
                <Box className="text-3xl sm:text-4xl mt-1 shrink-0" aria-hidden>
                  ⚡
                </Box>
                <Box className="flex-1 min-w-0">
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="500"
                    className="text-black mb-4 sm:mb-6"
                    style={playfair}
                  >
                    AI-Driven Alpha & Systematic Risk Management
                  </Heading>
                  <Text className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
                    We leverage proprietary algorithms, advanced mathematics, and AI to continuously extract alpha across internal, value-maximizing strategies — every second, every day. This includes monitoring volatility of varied instruments and ensuring capital preservation while generating superior yield.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box {...cardShellProps} className="bg-white p-8 sm:p-10 md:p-12 hover:shadow-md transition-all duration-300">
              <Flex className="flex items-start gap-5 sm:gap-6">
                <Box className="text-3xl sm:text-4xl mt-1 shrink-0" aria-hidden>
                  🌟
                </Box>
                <Box className="flex-1 min-w-0">
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="500"
                    className="text-black mb-4 sm:mb-6"
                    style={playfair}
                  >
                    Human Expertise x AI Synergy
                  </Heading>
                  <Text className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
                    We believe in the power of human brains and beings to work well together with machines and AI systems. AI provides speed, scale, and data breadth; human insight provides deep understanding, qualitative judgment, and strategic oversight.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box {...cardShellProps} className="bg-white p-8 sm:p-10 md:p-12 hover:shadow-md transition-all duration-300 md:col-span-2">
              <Flex className="flex items-start gap-5 sm:gap-6 max-w-4xl mx-auto md:max-w-none">
                <Box className="text-3xl sm:text-4xl mt-1 shrink-0" aria-hidden>
                  📈
                </Box>
                <Box className="flex-1 min-w-0">
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="500"
                    className="text-black mb-4 sm:mb-6"
                    style={playfair}
                  >
                    Modern Infrastructure, Enhanced Value
                  </Heading>
                  <Text className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
                    By building on cutting-edge automation and analytics from day one, we operate with efficiency, aiming to deliver superior risk-adjusted returns by moving beyond outdated, higher-fee models.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Join Us Section */}
      <Box bg="white" py={16} px={4} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={6} fontWeight="400" color="#000000" style={playfair}>
            Join <Text as="span">Us</Text>
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} mb={8} color="gray.600" fontWeight="300" lineHeight="relaxed">
            Whether you&apos;re an individual or an institution, Hushh Technologies LLC invites you to join us on our journey to transform investment strategies through innovative technology and ethical practices.
          </Text>

          <Flex justifyContent="center" gap={4} flexDirection={{ base: "column", sm: "row" }} align="center">
            <Box
              as="button"
              type="button"
              bg="black"
              color="white"
              borderRadius="full"
              onClick={() => (window.location.href = "/contact")}
              fontWeight="500"
              fontSize="sm"
              px={{ md: 10, base: 8 }}
              py={3}
              minW={{ sm: "160px" }}
              transition="opacity 0.2s"
              _hover={{ opacity: 0.85 }}
              _active={{ opacity: 0.75 }}
            >
              Contact Us
            </Box>

            <Box
              as="button"
              type="button"
              bg="transparent"
              color="gray.900"
              py={3}
              onClick={() => (window.location.href = "/signUp")}
              px={{ md: 10, base: 8 }}
              borderRadius="full"
              fontWeight="500"
              fontSize="sm"
              borderWidth="1px"
              borderColor="gray.300"
              minW={{ sm: "160px" }}
              transition="background 0.2s"
              _hover={{ bg: "gray.50" }}
            >
              Sign Up Now
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
