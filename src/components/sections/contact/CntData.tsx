import Button from "@/components/shared/Button";
import Image from "next/image";
import Facebook from "@/assets/images/facebook.png";
import Instagram from "@/assets/images/instagram.png";
import LinkedIn from "@/assets/images/linkedin.png";
import Link from "next/link";

const contactData = [
  {
    title: "Email",
    value: "hamzarahim836@gmail.com",
    buttonText: "Send Email",
    link: "mailto:hamzarahim836@gmail.com",
  },
  {
    title: "Whatsapp",
    value: "(+92)-3150131920",
    buttonText: "Send Message",
    link: "whatsapp://send?phone=+923150311920",
  },
  {
    title: "Fiverr",
    value: "Connect Directly Using Fiverr",
    buttonText: "Fiverr",
    link: "https://www.fiverr.com/s/eDbVNP",
  },
  {
    title: "Social Media",
    value: "Connect through Social Media",
    buttonText: [
      {
        icon: LinkedIn,
        text: "linkedin",
        link: "https://www.linkedin.com/in/work-freelancer",
      },
      {
        icon: Instagram,
        text: "Instagram",
        link: "https://www.instagram.com/hmza_rahim",
      },
      {
        icon: Facebook,
        text: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61551918475504",
      },
    ],
    link: "null",
  },
];
const CntData = () => {
  return (
    <main className="mt-14 max-w-screen-md mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md sm:grid-cols-3 grid justify-between content-center mx-auto sm:m-0"
          >
            <h2 className="text-lg font-medium mb-2">{item.title}</h2>
            <p className="text-sm mb-4 self-center">{item.value}</p>
            {typeof item.buttonText === "string" ? (
              <button className="py-2 px-4 hover:scale-105 duration-300">
                <Button
                  link={item.link}
                  text={item.buttonText}
                  target="_blank"
                />
              </button>
            ) : (
              <div className="grid grid-cols-3 gap-x-4">
                {item.buttonText.map((button, buttonIndex) => (
                  <div key={buttonIndex} className="flex flex-col items-center">
                    <Link href={button.link} target="_blank">
                      <Image
                        src={button.icon}
                        alt={button.text}
                        className="w-12 h-12 rounded-full"
                      />
                      <p className="text-sm mt-2 self-center">{button.text}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
export default CntData;

// import Button from "@/components/shared/Button";
// import Image from "next/image";
// import Facebook from "@/assets/images/facebook.png";
// import Instagram from "@/assets/images/instagram.png";
// import LinkedIn from "@/assets/images/linkedin.png";
// import Link from "next/link";

// const CntData = () => {
//   const renderButton = (button: any) => (
//     <div className="flex flex-col items-center">
//       <Link href={button.link} target="_blank">
//         <Image
//           src={button.icon}
//           alt={button.text}
//           className="w-12 h-12 rounded-full"
//         />
//         <p className="text-sm mt-2 self-center">{button.text}</p>
//       </Link>
//     </div>
//   );

//   return (
//     <main className="mt-14 max-w-screen-md mx-auto">
//       <div className="grid grid-cols-1 gap-4">
//         {/* Email */}
//         <div className="p-4 bg-white rounded-lg shadow-md sm:grid-cols-3 grid justify-between content-center mx-auto sm:m-0">
//           <h2 className="text-lg font-medium mb-2">Email</h2>
//           <p className="text-sm mb-4 self-center">hamzarahim836@gmail.com</p>
//           <button className="py-2 px-4 hover:scale-105 duration-300">
//             <Button
//               link="mailto:hamzarahim836@gmail.com"
//               text="Send Email"
//               target="_blank"
//             />
//           </button>
//         </div>

//         {/* Whatsapp */}
//         <div className="p-4 bg-white rounded-lg shadow-md sm:grid-cols-3 grid justify-between content-center mx-auto sm:m-0">
//           <h2 className="text-lg font-medium mb-2">Whatsapp</h2>
//           <p className="text-sm mb-4 self-center">(+92)-3150131920</p>
//           <button className="py-2 px-4 hover:scale-105 duration-300">
//             <Button
//               link="whatsapp://send?phone=+923150311920"
//               text="Send Message"
//               target="_blank"
//             />
//           </button>
//         </div>

//         {/* Fiverr */}
//         <div className="p-4 bg-white rounded-lg shadow-md sm:grid-cols-3 grid justify-between content-center mx-auto sm:m-0">
//           <h2 className="text-lg font-medium mb-2">Fiverr</h2>
//           <p className="text-sm mb-4 self-center">
//             Connect Directly Using Fiverr
//           </p>
//           <button className="py-2 px-4 hover:scale-105 duration-300">
//             <Button
//               link="https://www.fiverr.com/s/eDbVNP"
//               text="Fiverr"
//               target="_blank"
//             />
//           </button>
//         </div>

//         {/* Social Media */}
//         <div className="p-4 bg-white rounded-lg shadow-md sm:grid-cols-3 grid justify-between content-center mx-auto sm:m-0">
//           <h2 className="text-lg font-medium mb-2">Social Media</h2>
//           <p className="text-sm mb-4 self-center">Click on Icon</p>
//           <div className="grid grid-cols-3 gap-x-4">
//             {renderButton({
//               icon: LinkedIn,
//               text: "linkedin",
//               link: "https://www.linkedin.com/in/work-freelancer",
//             })}
//             {renderButton({
//               icon: Instagram,
//               text: "Instagram",
//               link: "https://www.instagram.com/hmza_rahim",
//             })}
//             {renderButton({
//               icon: Facebook,
//               text: "Facebook",
//               link: "https://www.facebook.com/profile.php?id=61551918475504",
//             })}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CntData;