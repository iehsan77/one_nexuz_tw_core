"use client";
import { CircleAlert } from "lucide-react";
import { useContext, useMemo, useState } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import FormProvider from "@/components/FormFields/FormProvider";
import Paragraph from "@/components/Typography/Paragraph";
import Heading4 from "@/components/Typography/Heading4";
import Button from "@/components/Button/Button";
import Heading5 from "@/components/Typography/Heading5";
import RHFSelect from "@/components/FormFields/RHFSelect";
import Image from "@/components/Image/Image";
import { ShareModal } from "@/components/Modal/ShareModal";
import RHFTextField from "@/components/FormFields/RHFTextField";

export default function DealCalculatorSection() {
  const [form, setForm] = useState({
    vehicleType: "",
    vin: "",
    msrp: "",
    incentives: "",
    mileage: "18000",
    tradeInValue: "",
    downPayment: "",
    dealerFee: "",
    leaseTerm: "36",
    creditTier: "Excellent"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section className="">
      <div className="container">
        <PricingDetailsSection />
      </div>
    </section>
  );
}

const PricingDetailsSection = () => {
  const { locale } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => {
      console.log("New modal state:", !prev);
      return !prev;
    });
  };
  const [pricing, setPricing] = useState({
    msrp: 0,
    sellingPrice: 0,
    cashIncentives: 0,
    Value: 0,
    annualMiles: 12000,
    leaseTerm: 36,
    creditTier: "Excellent"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPricing({ ...pricing, [name]: value });
  };
  const validateSchema = z.object({
    id: z.number(),
    number: z.string().min(1)
  });
  const defaultValues = useMemo(
    () => ({
      id: 0,
      number: ""
    }),
    []
  );

  const methods = useForm({
    resolver: zodResolver(validateSchema),
    defaultValues
  });
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };
  const sellingPriceAfterIncentives =
    Number(pricing.sellingPrice) - Number(pricing.cashIncentives);
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = methods;
  const [activeTab, setActiveTab] = useState("trim");
  const tabs = [
    { label: "Trim", value: "trim" },
    { label: "VIN", value: "vin" }
  ];
  const carModal = [
    { label: "Abu Dhabi", value: "Abu Dhabi" },
    { label: "Dubai", value: "Dubai" },
    { label: "Sharjah", value: "Sharjah" },
    { label: "Ajman", value: "Ajman" },
    { label: "Ras Al Khaimah", value: "Ras Al Khaimah" },
    { label: "Fujairah", value: "Fujairah" },
    { label: "Umm Al Quwain", value: "Umm Al Quwain" },
    { label: "Al Ain", value: "Al Ain" },
    { label: "Khor Fakkan", value: "Khor Fakkan" },
    { label: "Kalba", value: "Kalba" },
    { label: "Dibba Al-Fujairah", value: "Dibba Al-Fujairah" },
    { label: "Dibba Al-Hisn", value: "Dibba Al-Hisn" },
    { label: "Dhaid (Al Dhaid)", value: "Dhaid (Al Dhaid)" },
    { label: "Madinat Zayed", value: "Madinat Zayed" },
    { label: "Liwa Oasis", value: "Liwa Oasis" }
  ];

  // Pricing Details Fields
  const pricingDetailsFields = [
    { label: "MSRP", name: "msrp" },
    { label: "Selling Price Before Incentives", name: "sellingPriceBefore" },
    { label: "Cash Incentives", name: "cashIncentives" },
    { label: "Selling Price After Incentives", name: "sellingPriceAfter" },
    { label: "Residual Value", name: "residual", isReadOnly: true }
  ];

  // Trade-In Fields
  const tradeInFields = [
    { label: "Value Of Your Trade In", name: "tradeValue" },
    { label: "Amount Owed on Your Trade-in", name: "owedTrade" },
    { label: "Cap Cost Reduction", name: "capCost" }
  ];

  // Financing Fields
  const financingFields = [
    { label: "Acquisition Fee", name: "acquisitionFee" },
    { label: "Dealer Fee", name: "dealerFee" }
  ];
  // Financing Fields
  const financingFields1 = [
    { label: "Estimated Money Factor", name: "EstimatedMoneyFactor" }
  ];

  // Security & Taxes Fields
  const securityAndTaxesFields = [
    { label: "Total of Lease Payments", name: "securityDeposit" },
    { label: "Monthly Lease Payment", name: "securityDeposit", label2: "(Before Taxes and Fees)"},
    { label: "Monthly Lease Payment", name: "taxesFees", label2: "(After Taxes and Fees)" }
  ];

  return (
    <section className="pt-10">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8">
          {/* Vehicle Details */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="">
              <div className="">
                <Heading4
                  blackHeading={`Vehicle Details`}
                  className={`!text-primary`}
                />
              </div>
              <div className="flex justify-between ">
                <Heading5
                  blackHeading={`Check price by`}
                  className={`!font-[500]`}
                />
                <div className="flex gap-4 border-b border-gray-300">
                  {tabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={`font-medium transition-all duration-200 w-[50px] ${
                        activeTab === tab.value
                          ? "text-primary border-b-2 border-primary"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <RHFSelect
                    title={`Make`}
                    name="modal_id"
                    type="text"
                    placeholder="Make"
                    className="!border-b !border-gray-500"
                    options={carModal}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <RHFSelect
                    title={`Model`}
                    name="modal_id"
                    type="text"
                    placeholder="model"
                    className="!border-b !border-gray-500"
                    options={carModal}
                  />
                  <RHFSelect
                    title={`Year (new vehicles)`}
                    name="modal_id"
                    type="text"
                    placeholder="Year (new vehicles)"
                    className="!border-b !border-gray-500"
                    options={carModal}
                  />
                </div>
                <div>
                  <RHFSelect
                    title={`Style`}
                    name="modal_id"
                    type="text"
                    placeholder="Select Style"
                    className="!border-b !border-gray-500"
                    options={carModal}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={`/assets/icons/frame2147224084.svg`}
                width={500}
                height={500}
                alt={`graph`}
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Pricing Details */}
            <div className="lg:space-y-4 space-y-2 pt-2">
              <Heading4
                blackHeading="Pricing Details"
                className="!text-primary"
              />
              {pricingDetailsFields.map((field, index) => (
                <div
                  key={index}
                  className="flex items-end justify-between gap-4"
                >
                  <span className="flex items-center gap-2">
                    <Paragraph
                      blackText1={field.label}
                      className="!mb-0 text-nowrap"
                    />
                    <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                  </span>
                  <div className="flex items-center justify-end">
                    {field.isReadOnly ? (
                      <span className="mr-2 text-xs">$ 0</span>
                    ) : (
                      <div className="border-b border-gray-500 flex items-center justify-between">
                        <span className="mr-2 text-xs">$</span>
                        <RHFTextField
                          type="number"
                          name={field.name}
                          placeholder="0"
                          defaultValue="0"
                          inputClass={`!text-right placeholder:!text-right`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Annual Miles */}
              <div className="mt-8">
                <label className="mb-2 flex items-center gap-2">
                  Annual Miles
                  <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                </label>
                <div className="flex justify-between text-center">
                  {[10000, 12000, 15000].map((mile) => (
                    <button
                      key={mile}
                      type="button"
                      onClick={() =>
                        setPricing({ ...pricing, annualMiles: mile })
                      }
                      className={`w-full py-3 font-medium ${
                        pricing.annualMiles === mile
                          ? "bg-primary text-white"
                          : "bg-white border border-gray-400"
                      }`}
                    >
                      {mile}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Trade-in & Down Payment */}
            <div className="pt-4 border-t border-gray-300">
              <div className="flex sm:flex-row flex-col sm:justify-between">
                <div>
                  <Heading4
                    blackHeading="Trade in and Down Payment"
                    className="!text-primary !mb-2"
                  />
                  <Paragraph
                    blackText1={`Enter the details of your Trade-in to receive the most accurate calculation.`}
                    className="!mb-2"
                  />
                </div>
                <div>
                  <Button
                    variant="primary"
                    text="Value Your Trade In"
                    className="!border-none"
                  />
                </div>
              </div>

              <div className="lg:space-y-4 space-y-2 pt-2">
                {tradeInFields.map((field, index) => (
                  <div
                    key={index}
                    className="flex items-end justify-between gap-4"
                  >
                    <span className="flex items-center gap-2">
                      <Paragraph
                        blackText1={field.label}
                        className="!mb-0 text-nowrap"
                      />
                      <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                    </span>
                    <div className="border-b border-gray-500 flex items-center justify-between">
                      <span className="mr-2 text-xs">$</span>
                      <RHFTextField
                        type="number"
                        name={field.name}
                        placeholder="0"
                        defaultValue="0"
                        inputClass={`!text-right placeholder:!text-right`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financing */}
            <div className="pt-2 border-t border-gray-300">
              <Heading4
                blackHeading="Financing"
                className="!text-primary !mb-0"
              />
              <div className="lg:space-y-4 space-y-2 pt-2">
                {financingFields.map((field, index) => (
                  <div
                    key={index}
                    className="flex items-end justify-between gap-4 "
                  >
                    <span className="flex items-center gap-2">
                      <Paragraph
                        blackText1={field.label}
                        className="!mb-2 text-nowrap"
                      />
                      <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                    </span>
                    <div className="border-b border-gray-500 flex items-center justify-between">
                      <span className="mr-2 text-xs">$</span>
                      <RHFTextField
                        type="number"
                        name={field.name}
                        placeholder="0"
                        defaultValue="0"
                        inputClass={`!text-right placeholder:!text-right`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Lease Term */}
              <div className="mt-6">
                <label className="mb-2 flex items-center gap-2">
                  Lease Term (months)
                  <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                </label>
                <div className="flex justify-between text-center">
                  {[24, 36, 39, 48].map((leaseTerm) => (
                    <button
                      key={leaseTerm}
                      type="button"
                      onClick={() => setPricing({ ...pricing, leaseTerm })}
                      className={`w-full py-3 font-medium ${
                        pricing.leaseTerm === leaseTerm
                          ? "bg-primary text-white"
                          : "bg-white border border-gray-400"
                      }`}
                    >
                      {leaseTerm}
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:space-y-4 space-y-2 pt-2">
                {financingFields1.map((field, index) => (
                  <div
                    key={index}
                    className="flex items-end justify-between gap-4 "
                  >
                    <span className="flex items-center gap-2">
                      <Paragraph
                        blackText1={field.label}
                        className="!mb-2 text-nowrap"
                      />
                      <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                    </span>
                    <div className="border-b border-gray-500 flex items-center justify-between">
                      <span className="mr-2 text-xs">$</span>
                      <RHFTextField
                        type="number"
                        name={field.name}
                        placeholder="0"
                        defaultValue="0"
                        inputClass={`!text-right placeholder:!text-right`}
                      />
                    </div>
                  </div>
                ))}
                <span className="text-xs text-right block">
                  Equivalent to 4.39% APR
                </span>
              </div>

              {/* Lease Term */}
              <div className="mt-6">
                <label className="mb-2 flex items-center gap-2">
                  Credit Tier
                  <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                </label>
                <div className="flex justify-between text-center">
                  {["Poor", "Fair", "Good", "Excellent"].map((creditTier) => (
                    <button
                      key={creditTier}
                      type="button"
                      onClick={() => setPricing({ ...pricing, creditTier })}
                      className={`w-full py-3 font-medium ${
                        pricing.creditTier === creditTier
                          ? "bg-primary text-white"
                          : "bg-white border border-gray-400"
                      }`}
                    >
                      {creditTier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Security & Taxes */}
              <div className="pt-2 border-t border-gray-300">
                <Heading4
                  blackHeading="Estimated Monthly Payment"
                  className="!text-primary !mb-2"
                />
                <div className="lg:space-y-4 space-y-2 pt-2">
                  {securityAndTaxesFields.map((field, index) => (
                    <div
                      key={index}
                      className="flex items-end justify-between gap-4 "
                    >
                      <span className="flex items-center gap-2">
                        <div>
                          <Paragraph
                            blackText1={field.label}
                            className="!mb-0 text-nowrap"
                          />
                          {field.label2 && (
                            <Paragraph
                            blackText1={field.label2}
                            className="!mb-0 text-nowrap !text-xs"
                          />
                          )}
                        </div>
                        <CircleAlert className="w-3 h-3 text-black cursor-pointer" />
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="mr-2 text-xs">$ 0</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="button"
              variant="primary"
              text="Share Your Deal"
              onClick={toggleModal}
            />
          </div>
          <ShareUrDeal
            open={isModalOpen}
            toggleModal={toggleModal}
            close={() => setIsModalOpen(false)}
          />
        </div>
      </FormProvider>
    </section>
  );
};

const ShareUrDeal = ({ open, close, toggleModal }) => {
  const [setOpen] = useState(false);
  return (
    <>
      <ShareModal open={open} toggleModal={toggleModal} close={close}>
        <div className="pt-5">
          <Button
            type="button"
            variant="txt"
            text="BACK"
            icon="iconamoon:arrow-left-2-duotone"
            onClick={close}
          />
        </div>
        <div className="pt-4">
          <div className="">
            <Heading4 blackHeading={`Share`} />
          </div>
          <div className="flex flex-wrap pt-2 xs:space-y-0 space-y-2">
            <Button
              variant={`primary`}
              text={`Copy Link`}
              className={`!rounded-md !border-none`}
            />
            <span className="bg-[#FAFAFA] border border-[#E2E2E2] text-black !rounded-md px-4 py-2 ">
              {`https://carsolutions.io/zg44`}
            </span>
          </div>
          <div className="flex xs:pt-10 pt-4">
            <Button
              variant={`primary`}
              text={`Share Your Deal`}
              className={``}
            />
          </div>

          {/* Summary Start */}
          <div className="flex xs:text-start text-center justify-between xs:pt-10 pt-4">
            <Heading4 blackHeading={`Summary`} />
            <Button
              variant={`primary`}
              text={`Copy Summary`}
              className={`!px-2 !py-1 `}
            />
          </div>
          <div className="xs:pt-6 pt-4">
            <Heading5
              blackHeading={`2024 Honda Accord EX-L Hybrid 4dr Sedan (2.0L 4cyl gas/electric hybrid EVT)`}
            />
            <Heading5 blackHeading={`Great Deal — 89% off of MSRP`} />
          </div>

          <div className="space-y-6">
            <div className="">
              <Heading5
                blackHeading={`Pricing Details`}
                className="!font-semibold mb-4"
              />
              <div className="space-y-4">
                <LabelValueRow label="MSRP" value="123,315,321" />
                <LabelValueRow
                  label="Selling Price Before Incentives"
                  value="13,531,511"
                />
                <LabelValueRow label="Cash Incentives" value="5,325,325" />
                <LabelValueRow
                  label="Selling Price After Incentives"
                  value="8,206,186"
                />
                <LabelValueRow
                  label="Residual Value"
                  value="62"
                  hasDollar={false}
                  haspercent
                />
                <LabelValueRow
                  label="Annual Miles"
                  value="15000"
                  hasDollar={false}
                />
              </div>
            </div>
            <div className="">
              <Heading5
                blackHeading={`Trade-in and Down Payment`}
                className="!font-semibold mb-4"
              />
              <div className="space-y-4">
                <LabelValueRow label="Value Of Your Trade In" value="315" />
                <LabelValueRow
                  label="Amount Owed on Your Trade-in"
                  value="3,535"
                />
                <LabelValueRow label="Cap Cost Reduction" value="3,535" />
              </div>
            </div>
            <div className="">
              <Heading5
                blackHeading={`Financing`}
                className="!font-semibold mb-4"
              />
              <div className="space-y-4">
                <LabelValueRow label="Acquisition Fee" value="995" />
                <LabelValueRow label="Lease Term (months)" value="39" />
                <LabelValueRow
                  label="Estimated Money Factor"
                  value="0.00183"
                  dec="Equivalent to 4.39% APR"
                  hasDollar={false}
                  bt
                />
              </div>
            </div>

            <div className="">
              <div className="space-y-4">
                <LabelValueRow
                  label="Credit Tier"
                  dec="Excellent"
                  hasDollar={false}
                />
                <LabelValueRow label="Security Deposit" value="0" />
                <LabelValueRow
                  label="Taxes & Fees"
                  value="54,530"
                  description="Includes acquisition & dealer fee in amount shown"
                />
              </div>
            </div>
            <div className="">
              <Heading5
                blackHeading={`Estimated Monthly Payment`}
                className="!font-semibold mb-4"
              />
              <div className="space-y-4">
                <LabelValueRow label="Total of Lease Payments:" value="995" />
                <LabelValueRow
                  label="Monthly Lease Payment:"
                  description="(Before Taxes and Fees)"
                  value="$54,530"
                />
                <LabelValueRow
                  label="Monthly Lease Payment:"
                  value="$54,530"
                  description="(After Taxes and Fees)"
                />
              </div>
            </div>
          </div>
        </div>
      </ShareModal>
    </>
  );
};

const LabelValueRow = ({
  label,
  value,
  dec,
  description,
  bt,
  hasDollar = true,
  haspercent
}) => (
  <div className="flex justify-between items-center">
    <div className="">
      <Paragraph blackText1={label} className="!mb-0 sm:!text-lg" />
      {description && (
        <Paragraph blackText1={description} className="!mb-0 !text-xs" />
      )}
    </div>
    <div
      className={`md:w-xs border-b border-gray-500 flex items-center justify-between ${
        !hasDollar && !haspercent ? "!justify-end !border-none" : ""
      }
    `}
    >
      {hasDollar && <span className="mr-2 text-xs">$</span>}
      {haspercent && <span className="mr-2">%</span>}
      <div className="text-right">
        {value && <span className="mr-2">{value}</span>}
        {dec && (
          <p className={`mr-2 ${bt ? "border-t border-gray-500 pt-2" : ""}`}>
            {dec}
          </p>
        )}
      </div>
    </div>
  </div>
);
