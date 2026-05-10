import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const playfair = { fontFamily: "'Playfair Display', serif" } as const;

/** Community list controls + Contact cards: gradient surface, soft border, blue hover */
const sectionCard =
  "rounded-3xl border border-gray-200/70 bg-gradient-to-b from-white to-ios-gray-bg p-5 sm:p-8 shadow-soft hover:border-hushh-blue/25 transition-colors duration-200 ease-out";

/** Contact page body / subtitles: gray-500, light weight */
const bodyText =
  "text-[13px] sm:text-sm text-gray-500 font-light leading-relaxed font-sans";

/** Contact form section titles: Playfair, medium weight, black */
const sectionTitleClass =
  "font-serif text-xl sm:text-2xl font-medium text-black tracking-tight";

/** Contact form labels: small medium gray-500 */
const subsectionTitleClass =
  "font-sans text-sm font-medium text-gray-500 tracking-normal";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Box
      className="bg-ios-gray-bg antialiased text-gray-900 min-h-screen selection:bg-hushh-blue selection:text-white"
      pb={{ base: 12, md: 16 }}
    >
      <Box className="max-w-4xl mx-auto px-6 lg:px-10 w-full pt-8 md:pt-12 text-center">
        <Box className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-hushh-blue/20 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-hushh-blue rounded-full" />
          <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-hushh-blue">
            Privacy
          </span>
        </Box>
        <Heading
          as="h1"
          className="text-[4.125rem] leading-[1.1] font-normal text-black tracking-tight font-serif lg:text-[4.875rem]"
          style={playfair}
          mb={{ base: 8, md: 10 }}
        >
          Website Privacy<br />{" "}
          <span className="text-gray-400 italic font-light">Policy</span>
        </Heading>
      </Box>

      <Box className="max-w-4xl mx-auto px-6 lg:px-10 w-full">
        <VStack spacing={{ base: 5, md: 6 }} align="stretch">
        {/* Introduction */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Introduction
          </Heading>
          <Text className={bodyText}>
            This website privacy policy (the “Policy”) describes how Hushh Technologies LLC and its affiliates (“Hushh”) treat personal information collected on the HushhTech.com website (the “Website”). This Policy does not apply to information that Hushh may collect through other means.
          </Text>
        </Box>

        {/* Information That Hushh Collects */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Information That Hushh Collects
          </Heading>
          <Box ml={4}>
            <Heading
              as="h3"
              mb={2}
              className={subsectionTitleClass}
            >
              Personal Information
            </Heading>
            <Text mb={4} className={bodyText}>
              When you visit the Website, Hushh may collect certain personal information about you, such as your name, address, and email address, as well as any other personal information that you may provide, for example, through submission of forms or other documents.
            </Text>
            <Heading
              as="h3"
              mb={2}
              className={subsectionTitleClass}
            >
              Nonpersonal Information
            </Heading>
            <Text className={bodyText}>
              Hushh will also collect the following nonpersonal information about your visit(s):
            </Text>
            <Box pl={4} mt={2} className="space-y-2">
              <Text className={bodyText}>• The IP address and domain name used (the IP address is a numerical identifier assigned either to your internet service provider or directly to your computer);</Text>
              <Text className={bodyText}>• The type of browser and operating system you use;</Text>
              <Text className={bodyText}>• The date, time, and duration for which you visit the Website, the number of times you have visited the Website, and where you come from.</Text>
            </Box>
            <Text mt={4} className={bodyText}>
              For purposes of collecting some of the above-referenced information, Hushh uses tracking tools on its Website, such as browser cookies and web beacons. A cookie and a web beacon are pieces of data stored on your device containing information about your visit.
            </Text>
          </Box>
        </Box>

        {/* How Hushh Uses Information */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            How Hushh Uses Information That It Collects
          </Heading>
          <Text mb={4} className={bodyText}>
            Hushh uses information it collects in the following ways:
          </Text>
          <Box pl={4} className="space-y-2">
            <Text className={bodyText}>• To respond to your requests or questions;</Text>
            <Text className={bodyText}>• To inform you about Hushh;</Text>
            <Text className={bodyText}>• To communicate with you about your relationship with us;</Text>
            <Text className={bodyText}>• To improve the Website and the services provided;</Text>
            <Text className={bodyText}>• For security purposes.</Text>
          </Box>
          <Text mt={4} className={bodyText}>
            In addition, Hushh may use your information as otherwise permitted by law.
          </Text>
        </Box>

        {/* Sharing of Information */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Hushh May Share Your Information in Limited Circumstances
          </Heading>
          <Text className={bodyText}>
            Hushh may share your information with its employees, agents, or third-party service providers who need to know such information for purposes of performing their jobs, including to respond to requests or questions that you may have. In addition, Hushh may share your information with third parties for purposes of complying with legal requirements or to respond to legal requests, such as in the case of a court order or subpoena or in connection with a regulatory investigation. Finally, Hushh might also share information that it collects with others when it is investigating potential fraud or for other reasons as permitted by law.
          </Text>
        </Box>

        {/* Protection of Information */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Protection of Information
          </Heading>
          <Text className={bodyText}>
            Hushh is strongly committed to protecting any personal information collected through the Website against unauthorized access, use, or disclosure. Hushh will not sell or otherwise disclose any personal information collected from the Website, other than as described herein.
          </Text>
          <Text mt={4} className={bodyText}>
            In addition, Hushh has implemented procedures to safeguard the integrity of its information technology assets, including but not limited to authentication, monitoring, auditing, and encryption. These security procedures have been integrated into the design, implementation, and day-to-day operations of the Website as part of a continuing commitment to the security of electronic content as well as the electronic transmission of information. However, no method of safeguarding information is completely secure. While Hushh uses measures designed to protect personal information, it cannot guarantee that our safeguards will be effective or sufficient.
          </Text>
          <Text mt={4} className={bodyText}>
            For security purposes, Hushh employs software to monitor traffic to identify unauthorized attempts to upload or change information or otherwise damage the Website. Any information that an individual provides to Hushh by visiting the Website will be stored within the United States. If you live outside of the United States, you understand and agree that Hushh may store your information in the United States. The Website is subject to United States laws, which may or may not afford the same level of protection as those in your country.
          </Text>
        </Box>

        {/* Retention of Personal Information */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Retention of Personal Information
          </Heading>
          <Text className={bodyText}>
            Hushh retains personal information to the extent Hushh deems necessary to carry out the processing activities described above, including but not limited to compliance with applicable laws, regulations, rules, and requests of relevant law enforcement and/or other governmental agencies, and to the extent Hushh reasonably deems necessary to protect its and its partners’ rights, property, or safety and the rights, property, and safety of its users and other third parties.
          </Text>
        </Box>

        {/* Cookies and Tracking Tools */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Cookies and Tracking Tools
          </Heading>
          <Text className={bodyText}>
            As indicated above, Hushh collects nonpersonal information on its Website through the use of tracking tools, such as browser cookies. These cookies are necessary to allow you to browse the Website and access certain pages. Necessary cookies are required for the functionality of the Website so that it works properly. Hushh does not use these cookies to collect personal information about you.
          </Text>
          <Text mt={4} className={bodyText}>
            Your browser may give you the ability to control cookies. Certain browsers can be set to reject cookies. Options you select are browser and device specific. If you block or delete cookies, not all of the tracking that we have described in this Policy will stop.
          </Text>
          <Text mt={4} className={bodyText}>
            Hushh does not engage in automated decision-making for the processing of any personal information it collects.
          </Text>
        </Box>

        {/* Children and the Website */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Children and the Website
          </Heading>
          <Text className={bodyText}>
            The Website is meant for adults. Hushh does not knowingly collect personally identifiable information from children under age 16. If you are a parent or legal guardian of a child under 16 who believes that child may have visited the Website, please contact us at the address below. By using the services provided by the Website, you represent that you are 16 years of age or older.
          </Text>
        </Box>

        {/* Business Transfer */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Business Transfer
          </Heading>
          <Text className={bodyText}>
            Hushh may, in the future, sell or otherwise transfer some or all of its business, operations, or assets to a third party, whether by merger, acquisition, or otherwise. Personal information Hushh obtains from or about you through the Website may be disclosed to any potential or actual third-party acquirers and may be among those assets transferred.
          </Text>
        </Box>

        {/* Links to Other Sites or Third-Party Services */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Links to Other Sites or Third-Party Services
          </Heading>
          <Text className={bodyText}>
            If a link to a third-party site is included on the Website and you click on it, you will be taken to a website Hushh does not control. This Policy does not apply to the privacy practices of that website. Read the privacy policy of other websites carefully. Hushh is not responsible for these third-party sites.
          </Text>
        </Box>

        {/* Disclaimer and Policy Updates */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Disclaimer and Policy Updates
          </Heading>
          <Text className={bodyText}>
            This Policy should not be construed as giving business, legal, or other advice or warranting as failproof the security of information provided through the Website. Hushh will notify you of any material changes in this Policy by posting an updated copy on the Website.
          </Text>
        </Box>

        {/* Modifications and Updates */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Modifications and Updates to this Privacy Policy
          </Heading>
          <Text className={bodyText}>
            This Policy replaces all previous disclosures. We reserve the right, at any time, to modify, alter, and/or update this Policy. Any such modifications will be effective upon our posting of the revised Policy.
          </Text>
        </Box>

        {/* Contact Information */}
        <Box className={sectionCard}>
          <Heading
            as="h2"
            mb={4}
            className={sectionTitleClass}
            style={playfair}
          >
            Contact Information
          </Heading>
          <Text className={bodyText}>
            For questions regarding this Policy, please contact{" "}
            <Text as="span" className="font-semibold text-hushh-blue font-sans">
            ir@hushh.ai
            </Text>
            .
          </Text>
        </Box>

        {/* Last Updated */}
        <Box textAlign="center" className="pt-4 pb-6 border-t border-gray-200/80 mt-2">
          <Text className="text-[13px] text-gray-400 font-light font-sans">
            Last Updated: February 5, 2025
          </Text>
        </Box>
      </VStack>
      </Box>
    </Box>
  );
};

export default PrivacyPolicyPage;
