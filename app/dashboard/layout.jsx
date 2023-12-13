import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import "./style.css";
import Bottombar from "@/components/shared/Bottombar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Topbar /> */}

        <main className="flex relative">
          {/* <div className="left_radial_ball"></div> */}
          <LeftSideBar />
          <section className="w-full">
            <div className="">{children}</div>
          </section>
          <RightSideBar />
          {/* <div className="right_radial_ball"></div> */}
        </main>

        <Bottombar />
      </body>
    </html>
  );
}
