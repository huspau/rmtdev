import ResultsCount from "./ResultsCount.tsx";
import SortingControls from "./SortingControls.tsx";
import JobList from "./JobList.tsx";
import PaginationControls from "./PaginationControls.tsx";

export default function Sidebar({jobItems}) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
          <ResultsCount />
          <SortingControls />
      </div>
        <JobList jobItems={jobItems}/>
        <PaginationControls />
    </div>
  );
}
