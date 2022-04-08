import React, { useState } from "react";

function Dashboard() {
  let apiKey = "AIzaSyDmac8GBPMLJWPru5MaiXVQdzPa3X2QdhA";
  let data = [
    {
      name: "5K Car Care Padur",
      location: "Padur, Chennai",
      image:
        "https://pr0.nicelocal.in/TBIH-lrg8JFTLx2trVT__Q/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2VUrij2XLqqpOWMdqAySMUy3G4fSY3aSyRdwHIyYaNmLq6utWUNThfxviRLdFYSdsA",
      phoneNumber: "070944 84667",
    },
    {
      name: "Velmurugam Autoworks",
      location: "Kazhipadur, Chennai",
      image:
        "https://lh3.googleusercontent.com/45YonfXlsgJ6ZWwUAxd5VEFelSDGM41yt3dURXsHksxj-i8kOfzGVSoBSH_SvxWAIpyVi4y5gntYe1hXkE_cz4Ts1t07=w512",
      phoneNumber: "091763 88645",
    },
    {
      name: "Spark Motors",
      location: "Kelambakkam, Chennai",
      image:
        "https://content3.jdmagicbox.com/comp/chennai/v8/044pxx44.xx44.170911175611.g6v8/catalogue/spark-motors-kelambakkam-chennai-car-repair-and-services-27e3hx9.jpg",
      phoneNumber: "097911 34190",
    },
    {
      name: "Sri Raghavendra Auto Garage",
      location: "Kelambakkam, Chennai",
      image:
        "https://content3.jdmagicbox.com/comp/chennai/l5/044pxx44.xx44.140825170511.v7l5/catalogue/sri-raghavendra-auto-garage-kelambakkam-chennai-garages-gm9b26.jpg?clr=2d2d39",
      phoneNumber: "Not Available",
    },
    {
      name: "BTZ AUTO WORKS",
      location: "Kelambakkam, Chennai",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOGnJe5PEFkvUjfZVSfm5i0puhmKU2g08pGrSID=w1080-k-no",
      phoneNumber: "Not Available",
    },
    {
      name: "R.K. LOGESH AUTO MOBILES",
      location: "Padur, Chennai",
      image:
        "https://content3.jdmagicbox.com/comp/chennai/m2/044pxx44.xx44.140215133615.m2m2/catalogue/r-k-logesh-automobiles-padur-chennai-motorcycle-repair-and-services-xxtmr-250.jpg",
      phoneNumber: "098417 92580",
    },
    {
      name: "KK Auto Works",
      location: "Kelambakkam, Chennai",
      image:
        "https://content3.jdmagicbox.com/comp/chennai/u4/044pxx44.xx44.151121105345.l1u4/catalogue/k-k-auto-electrical-works-adambakkam-chennai-automobile-electric-works-ya6sj3.jpg?clr=442222",
      phoneNumber: "099414 05110",
    },
    {
      name: "Top Gear Studioz",
      location: "Kazhipadur, Chennai",
      image:
        "https://content.jdmagicbox.com/comp/chennai/w4/044pxx44.xx44.180626134121.d9w4/catalogue/top-gear-studioz-kelambakkam-chennai-car-repair-and-services-14bpg2xy1o.jpg?clr=333333",
      phoneNumber: "098849 91730",
    },
    {
      name: "Chennai Motors",
      location: "Kazhipadur, Chennai",
      image:
        "https://content3.jdmagicbox.com/comp/chennai/c9/044pxx44.xx44.140616171428.j3c9/catalogue/chennai-motors-chennai-iyu20gxonf-250.jpg",
      phoneNumber: "Not Available",
    },
    {
      name: "Motorage Automotive",
      location: "Kelambakkam, Chennai",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOicZCdty2_O0-8fM6j4aejBAI5RafkeEIErrX7",
      phoneNumber: "091764 94465",
    },
    {
      name: "Expert Spanners",
      location: "Padur, Chennai",
      image:
        "https://www.team-bhp.com/forum/attachments/chennai/1911335d1567086781-multi-brand-car-workshop-expert-spanners-omr-chennai-img_0161.jpg",
      phoneNumber: "098417 00633",
    },
    {
      name: "S Drive Multi Brand Car Service OMR",
      location: "Navalur, Chennai",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNwvQuyhaxoTar-N0X_6xR9gOAqzJdJKpkjTIwk=w1080-k-no",
      phoneNumber: "098846 73399",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [garage, setGarage] = useState([]);
  const getNearByGarage = () => {
    setGarage([]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGarage(data.sort(() => Math.random() - 0.5));
    }, 4000);
  };
  return (
    <div className="row">
      <div
        className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        style={{ textAlign: "center", paddingTop: "20px" }}
      >
        <button
          onClick={getNearByGarage}
          style={{
            textAlign: "center",
            width: "80vw",
            backgroundColor: "#f64c72",
            color: "lightcyan",
            padding: "5px",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Get Garage Near By you
        </button>
      </div>
      <div className="row mt-4">
        {loading && (
          <p style={{ color: "whitesmoke", textAlign: "center" }}>
            <i className="fa fa-spinner fa-spin"></i> Fetching list, Please
            wait!
          </p>
        )}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ul style={{ listStyle: "none" }}>
            {garage.map((data, key) => {
              return (
                <li className="mt-3">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={data.image}
                      height="100"
                      width="140"
                      style={{ borderRadius: "4px" }}
                    ></img>
                    <div style={{ marginLeft: "20px", color: "whitesmoke" }}>
                      <h6 style={{ marginBottom: "0px" }}>{data.name}</h6>
                      <small>{data.location}</small>
                      <br />
                      <tel>{data.phoneNumber}</tel>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
