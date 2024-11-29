import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/serviceProvider dashboard/Sidebar";
import { useParams } from "react-router-dom";
import { Servicesform } from "../Component/dashboard/services/Servicesform";
import { useEffect, useState } from "react";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { IndustryRelations } from "../Component/serviceProvider dashboard/IndustryRelations/IndustryRelations";
import { MessageBoard } from "../Component/serviceProvider dashboard/messages/MessageBoard";
import { LiveChat } from "../Component/serviceProvider dashboard/messages/LiveChat";
import { CorporateMessages } from "../Component/serviceProvider dashboard/messages/CorporateMessages";
import { Accounting } from "../Component/serviceProvider dashboard/Accounting/Accounting";
import { CorporateTickets } from "../Component/serviceProvider dashboard/HelpAndSupport/CorporateTickets";
import { Applications } from "../Component/serviceProvider dashboard/Applications/Applications";
import { TicketThread } from "../Component/serviceProvider dashboard/TicketThread";
import { MyProfile } from "../Component/dashboard/Myprofile/MyProfile";

export function ServiceDashboard() {
  const { section } = useParams();
  const [isOpen, setIsOpen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarProvider className="">
      <div className="flex min-h-screen w-full">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 flex flex-col`}>
          <Topbar section={section} />
          <main className="flex-1 overflow-auto p-4">
            {section === "My profile" && <MyProfile />}
            {section === "services" && <Servicesform />}
            {section === "application" && <Applications />}
            {section === "messages" && <MessageBoard />}
            {section === "accounting" && <Accounting />}
            {section === "Corporate Tickets" && <CorporateTickets />}
            {section === "Industry Relations" && <IndustryRelations />}
            {section === "My Properties / Services" && <HelpAndSupport />}
            {section === "livechat" && <LiveChat />}
            {/* temperory routing */}
            {section === "corporate messages" && <CorporateMessages />}
            {section === "Ticket Thread" && <TicketThread />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}