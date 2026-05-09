/**
 * A2A Scenario Setup Screen (Screen 1) — theme aligned with Home / Login / Signup
 */
'use client';

import React, { useState } from 'react';
import HushhTechCta, { HushhTechCtaVariant } from '../hushh-tech-cta/HushhTechCta';
import {
  A2AScenarioConfig,
  A2AScenarioSetupProps,
  DemoUserIdentifiers,
  ScenarioOperations,
  RelyingParty,
  DEMO_RELYING_PARTIES,
  DEFAULT_SCENARIO_CONFIG,
} from '../../types/a2aPlayground';

const playfair = { fontFamily: "'Playfair Display', serif" };

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

const inputClass =
  'w-full h-12 px-4 rounded-2xl border border-gray-200 bg-white text-[13px] text-black placeholder:text-gray-400 font-light focus:outline-none focus:border-hushh-blue transition-colors';

const sectionLabel = 'text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-3';

export const A2AScenarioSetupScreen: React.FC<A2AScenarioSetupProps> = ({ onRunScenario }) => {
  const [selectedPartyId, setSelectedPartyId] = useState(DEFAULT_SCENARIO_CONFIG.relyingParty.id);
  const [user, setUser] = useState<DemoUserIdentifiers>(DEFAULT_SCENARIO_CONFIG.user);
  const [operations, setOperations] = useState<ScenarioOperations>(DEFAULT_SCENARIO_CONFIG.operations);

  const selectedParty: RelyingParty =
    DEMO_RELYING_PARTIES.find((p) => p.id === selectedPartyId) || DEMO_RELYING_PARTIES[0];

  const handleRun = () => {
    onRunScenario({
      relyingParty: selectedParty,
      user,
      operations,
    });
  };

  const hasOperation =
    operations.verifyKycStatus || operations.confirmKeyMatch || operations.exportKycProfile;

  const opRow = (
    checked: boolean,
    onChange: (v: boolean) => void,
    title: string,
    subtitle: string
  ) => (
    <label className="flex items-start gap-3 cursor-pointer group rounded-2xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-hushh-blue"
      />
      <span className="min-w-0">
        <span className="block text-[13px] font-medium text-black">{title}</span>
        <span className="block text-[11px] text-gray-500 font-light mt-0.5 leading-relaxed">{subtitle}</span>
      </span>
    </label>
  );

  return (
    <div className="w-full bg-white py-8 lg:py-12 px-4 sm:px-6 lg:px-40">
      <div className="mb-10 lg:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-hushh-blue/20 rounded-full bg-hushh-blue/5 mb-5">
          <span className="w-1.5 h-1.5 bg-hushh-blue rounded-full" />
          <span className="text-[10px] tracking-[0.15em] uppercase font-medium text-hushh-blue">
            A2A Protocol Demo
          </span>
        </div>
        <h1
          className="text-[2.5rem] leading-[1.1] font-normal text-black tracking-tight lg:text-[3.5rem]"
          style={playfair}
        >
          Agent-to-Agent <br />
          <span className="text-gray-400 italic font-light">KYC Playground.</span>
        </h1>
        <p className="text-gray-500 text-sm font-light mt-4 leading-relaxed max-w-lg">
          Watch Bank KYC Copilot and Hushh KYC Agent collaborate in real-time to verify identity and export KYC data.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200/80 bg-gradient-to-b from-white to-[#F5F5F7] p-5 md:p-8 lg:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <section>
              <p className={sectionLabel}>1. Choose Relying Party</p>
              <label className="block text-[11px] text-gray-500 font-medium mb-2">Bank or Financial Institution</label>
              <select
                value={selectedPartyId}
                onChange={(e) => setSelectedPartyId(e.target.value)}
                className={inputClass}
              >
                {DEMO_RELYING_PARTIES.map((party) => (
                  <option key={party.id} value={party.id}>
                    {party.name}
                    {party.description ? ` – ${party.description}` : ''}
                  </option>
                ))}
              </select>
            </section>

            <div className="h-px bg-gray-200/80" />

            <section>
              <p className={sectionLabel}>2. User to Verify</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] text-gray-500 font-medium mb-2">Full Name</label>
                  <input
                    className={inputClass}
                    value={user.fullName}
                    onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 font-medium mb-2">Phone Number</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select
                      value={user.phoneCountryCode}
                      onChange={(e) => setUser({ ...user, phoneCountryCode: e.target.value })}
                      className={`${inputClass} sm:w-36 shrink-0`}
                    >
                      {PHONE_CODES.map((code) => (
                        <option key={code.value} value={code.value}>
                          {code.label}
                        </option>
                      ))}
                    </select>
                    <input
                      className={inputClass}
                      value={user.phoneNumber}
                      onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 font-medium mb-2">Country</label>
                  <select
                    value={user.country}
                    onChange={(e) => setUser({ ...user, country: e.target.value })}
                    className={inputClass}
                  >
                    {COUNTRY_OPTIONS.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 font-medium mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    className={inputClass}
                    value={user.email || ''}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email@example.com"
                  />
                </div>
                {operations.confirmKeyMatch && (
                  <div>
                    <label className="block text-[11px] text-gray-500 font-medium mb-2">
                      SSN Last 4 Digits (for key match demo)
                    </label>
                    <input
                      className={inputClass}
                      value={user.ssnLast4 || ''}
                      onChange={(e) => setUser({ ...user, ssnLast4: e.target.value })}
                      placeholder="1234"
                      maxLength={4}
                    />
                    <p className="text-[11px] text-gray-500 font-light mt-2">
                      This is only used to demo VerifyFieldMatch – never shared in clear
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section>
              <p className={sectionLabel}>3. What should agents do?</p>
              <div className="space-y-3">
                {opRow(operations.verifyKycStatus, (v) => setOperations({ ...operations, verifyKycStatus: v }), 'Verify KYC Status', 'CheckKYCStatus – Is this user verified?')}
                {opRow(operations.confirmKeyMatch, (v) => setOperations({ ...operations, confirmKeyMatch: v }), 'Confirm Key Match', 'VerifyFieldMatch – Does SSN last4 match?')}
                {opRow(operations.exportKycProfile, (v) => setOperations({ ...operations, exportKycProfile: v }), 'Export KYC Profile', 'ExportKYCProfile – Get normalized JSON profile')}
              </div>
            </section>

            <HushhTechCta variant={HushhTechCtaVariant.BLACK} onClick={handleRun} disabled={!user.fullName || !hasOperation}>
              <span>Run A2A KYC Scenario</span>
              <span className="material-symbols-outlined thin-icon text-lg">arrow_forward</span>
            </HushhTechCta>

            <p className="text-[11px] text-gray-500 font-light text-center lg:text-left leading-relaxed">
              This will simulate a real A2A conversation between {selectedParty.name} and Hushh KYC Agent.
            </p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-gray-400 text-center font-light mt-10">A2A Protocol Demo • Hushh KYC Network • ADFW 2025</p>
    </div>
  );
};

export default A2AScenarioSetupScreen;
