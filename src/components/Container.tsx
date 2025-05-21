import Sidebar from "./Sidebar.tsx";
import JobItemContent from "./JobItemContent.tsx";

export default function Container({jobItems}) {
  return <div className="container">
    <Sidebar jobItems={jobItems}/>
    <JobItemContent />
  </div>;
}
