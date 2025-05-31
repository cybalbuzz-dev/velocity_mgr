const BulletPointTimeline = () => {
  return (
    <div className="relative ">
      {/* Vertical Line */}
      {/* <div className="absolute  top-0 left-2 w-0.5 h-full bg-teal-600" /> */}

      {/* 1. Retail & Store Teams */}
      <div className="relative  border-l-[2px]  border-primary pl-8  pb-6 ">
        <div className="absolute  left-[-7px] top-0 w-3 h-3 bg-teal-600 rounded-full z-10" />
        <p className="text-sm md:text-base  ">
          <span className="font-semibold">Retail & Store Teams</span> –
          Frontline Workers With High Turnover And Variable Hours
        </p>
      </div>

      {/* 2. Healthcare & Care Homes */}
      <div className="relative border-l-[2px]  border-primary pl-8  pb-6">
        <div className="absolute  left-[-7px] top-0 w-3 h-3 bg-teal-600 rounded-full z-10" />
        <p className="text-sm md:text-base">
          <span className="font-semibold">Healthcare & Care Homes</span> –
          Nurses, Agency Staff, And Rotating Support Workers
        </p>
      </div>

      {/* 3. Cleaning & Maintenance Crews */}
      <div className="relative border-l-[2px]  border-primary pl-8  pb-6">
        <div className="absolute  left-[-7px] top-0 w-3 h-3 bg-teal-600 rounded-full z-10" />
        <p className="text-sm md:text-base">
          <span className="font-semibold">Cleaning & Maintenance Crews</span> –
          On-Location Teams With Assigned Zones And Hours
        </p>
      </div>

      {/* 4. Security & Guard Agencies */}
      <div className="relative border-l-[2px]  border-primary pl-8  pb-6">
        <div className="absolute  left-[-7px] top-0 w-3 h-3 bg-teal-600 rounded-full z-10" />
        <p className="text-sm md:text-base">
          <span className="font-semibold">Security & Guard Agencies</span> –
          Staff Across Multiple Client Sites
        </p>
      </div>

      {/* 5. Event & Temp Staffing */}
      <div className="relative border-l-[2px]  border-primary pl-8  pb-6">
        <div className="absolute  left-[-7px] top-0 w-3 h-3 bg-teal-600 rounded-full z-10" />
        <p className="text-sm md:text-base">
          <span className="font-semibold">Event & Temp Staffing</span> –
          Short-Term Assignments And Mobile Clock-Ins
        </p>
      </div>

      {/* 6. Field & Facility Staff */}
      <div className="relative pl-8  pb-6">
        <div className="absolute  left-[-6px] top-0 w-3 h-3 bg-teal-600 rounded-full z-10" />
        <p className="text-sm md:text-base">
          <span className="font-semibold">Field & Facility Staff</span> – Split
          Locations, Independent Assignments, Tight Tracking.
        </p>
      </div>
    </div>
  );
};

export default BulletPointTimeline;
