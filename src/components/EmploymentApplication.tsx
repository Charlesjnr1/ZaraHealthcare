"use client";

import { useState } from "react";

export default function EmploymentApplication() {
  const [form, setForm] = useState<any>({});

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border-t-8 border-[#EC4899]">

        {/* HEADER */}
        <div className="bg-[#1E3A8A] text-white p-8 text-center">
          <h1 className="text-3xl font-bold tracking-wide">
            ZARA Home Healthcare Services, Inc.
          </h1>
          <p className="mt-2 text-pink-300">Employment Application</p>
        </div>

        <div className="p-10 space-y-12">

          {/* PERSONAL INFORMATION */}
          <SectionTitle title="Personal Information" />

          <div className="grid md:grid-cols-3 text-black gap-6">
            <Input label="Full Name (Last Name First)" name="name" onChange={handleChange} />
            <Input label="Date of Birth" name="dob" type="date" onChange={handleChange} />
            <Input label="SSN" name="ssn" onChange={handleChange} />
          </div>

          <div className="grid md:grid-cols-4 text-black gap-6">
            <Input label="Present Address" name="presentAddress" onChange={handleChange} />
            <Input label="City" name="presentCity" onChange={handleChange} />
            <Input label="State" name="presentState" onChange={handleChange} />
            <Input label="Zip" name="presentZip" onChange={handleChange} />
          </div>

          <div className="grid md:grid-cols-2 text-black gap-6">
            <Input label="Phone Number" name="phone" onChange={handleChange} />
            <Select label="Are you 18 years or older?" name="adult" />
          </div>

          {/* DESIRED EMPLOYMENT */}
          <SectionTitle title="Desired Employment" />

          <div className="grid md:grid-cols-3 text-black gap-6">
            <Input label="Position" name="position" onChange={handleChange} />
            <Input label="Start Date" name="startDate" type="date" onChange={handleChange} />
            <Input label="Desired Salary" name="salary" onChange={handleChange} />
          </div>

          <div className="grid md:grid-cols-2 text-black gap-6">
            <Select label="Currently Employed?" name="employed" />
            <Select label="May we contact employer?" name="contactEmployer" />
            <Select label="Are you Eligible for Employment?" name="Employment" />
          </div>

          {/* EMERGENCY CONTACT */}
          <SectionTitle title="Emergency Contact" />

          <div className="grid md:grid-cols-3 text-black gap-6">
            <Input label="Full Name" name="emergencyName" onChange={handleChange} />
            <Input label="Relationship" name="emergencyRelation" onChange={handleChange} />
            <Input label="Telephone #" name="emergencyPhone" onChange={handleChange} />
          </div>

          <div className="grid md:grid-cols-4 text-black gap-6">
            <Input label="Address" name="emergencyAddress" onChange={handleChange} />
            <Input label="City" name="emergencyCity" onChange={handleChange} />
            <Input label="State" name="emergencyState" onChange={handleChange} />
            <Input label="Zip" name="emergencyZip" onChange={handleChange} />
          </div>
          {/* PERSONAL REFERENCES */}
          <SectionTitle title="Personal References" />

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-[#1E3A8A] text-white">
                <tr>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Address</th>
                  <th className="p-3 border">Business</th>
                  <th className="p-3 border">From</th>
                  <th className="p-3 border">To</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="text-black">
                    <td className="border p-2"><input className="w-full outline-none" /></td>
                    <td className="border p-2"><input className="w-full outline-none" /></td>
                    <td className="border p-2"><input className="w-full outline-none" /></td>
                    <td className="border p-2"><input type="date" className="w-full outline-none" /></td>
                    <td className="border p-2"><input type="date" className="w-full outline-none" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* EDUCATION */}
          <SectionTitle title="Education" />

          <EducationTable />

          {/* EMPLOYMENT HISTORY */}
          <SectionTitle title="Employment History" />

          <EmploymentHistory />

          {/* BACKGROUND */}
          <SectionTitle title="Background Information" />

          <Select
            label="Have you ever been convicted of a felony within the last 5 years?"
            name="felony"
            onChange={handleChange}
          />

          <div>
            <label className="block mb-2 text-sm font-medium text-[#1E3A8A]">
              If yes, please explain
            </label>
            <textarea
              name="felonyExplanation"
              onChange={handleChange}
              rows={4}
              className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          {/* AGREEMENT SECTION */}
          <SectionTitle title="Applicant Certification & Agreement" />

          <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
            <p>
              I certify that the facts contained in this application are true and complete.
              Any misrepresentation or falsification of information may be cause for rejection
              of my application or dismissal if discovered later.
            </p>

            <p>
              I understand that employment is not guaranteed for any term and may be terminated
              at any time with or without prior notice.
            </p>

            <p>
              I authorize investigation of all statements, including background checks,
              criminal records, motor vehicle records, and previous employment history.
            </p>

            <p>
              I agree to comply with company rules and regulations and agree to drug testing
              prior to and during employment if required.
            </p>

            <p>
              ZARA Home Healthcare Services Inc. is an Equal Opportunity Employer.
            </p>
          </div>

          {/* SIGNATURE */}
          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <Input label="Signature of Applicant" name="signature" onChange={handleChange} />
            <Input label="Date" name="signatureDate" type="date" onChange={handleChange} />
          </div>

          {/* SUBMIT */}
          <div className="text-center pt-6">
            <button className="bg-[#EC4899] hover:bg-pink-600 text-white px-10 py-3 rounded-xl font-semibold shadow-lg transition duration-300">
              Submit Application
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Reusable Section Title */
function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl  font-bold text-[#1E3A8A] border-b-2 border-pink-400 pb-2">
      {title}
    </h2>
  );
}

/* Reusable Input */
function Input({
  label,
  name,
  type = "text",
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[#1E3A8A]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="w-full text-black border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
}
/* Select */
function Select({
  label,
  name,
  onChange,
}: {
  label: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[#1E3A8A]">
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
}
/* Education Table */
function EducationTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-[#1E3A8A] text-white">
          <tr>
            <th className="p-3 border">Level</th>
            <th className="p-3 border">School Name</th>
            <th className="p-3 border">Years Attended</th>
            <th className="p-3 border">Graduated?</th>
            <th className="p-3 border">Major</th>
          </tr>
        </thead>
        <tbody>
          {["Elementary", "High School", "College", "Professional"].map(
            (level) => (
              <tr key={level} className="text-center text-black">
                <td className="border p-2">{level}</td>
                <td className="border p-2">
                  <input className="w-full p-2 outline-none" />
                </td>
                <td className="border p-2">
                  <input className="w-full p-2 outline-none" />
                </td>
                <td className="border p-2">
                  <select className="w-full p-2 outline-none">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </td>
                <td className="border p-2">
                  <input className="w-full p-2 outline-none" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

/* Employment History */
function EmploymentHistory() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Employer Name" name="employer1" />
        <Input label="Job Title" name="jobTitle1" />
        <Input label="From" name="from1" type="date" />
        <Input label="To" name="to1" type="date" />
        <Input label="Supervisor Name" name="supervisor1" />
        <Input label="Hourly Rate" name="rate1" />
      </div>
    </div>
  );
}

