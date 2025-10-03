// import React from "react";
// import Typography from "../ui/Typography";
// import Image from "../Image/Image";

// function GuideCard({ data }) {
//   return (
//     <div className="bg-white h-full border rounded-lg border-primary overflow-hidden">
//       <div className="w-full">
//         <Image
//           src={data?.thumbnail_image}
//           alt="img"
//           width={400}
//           height={400}
//           className="w-full h-[260px] object-cover"
//         />
//       </div>
//       {/*  */}
//       <div className="p-5 space-y-6">
//         <Typography weight="medium" size="lg">
//           {data?.title}
//         </Typography>
//         <div className="flex items-center gap-3">
//           <Image
//             src="/assets/guide/client.png"
//             alt="img"
//             width={33}
//             height={33}
//           />
//           <Typography weight="normal" size="sm">
//             Wade Warren
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GuideCard;

import React from "react";
import Typography from "../ui/Typography";
import Image from "../Image/Image";

function GuideCard({ data }) {
  return (
    <div className="bg-white h-full border rounded-lg border-primary overflow-hidden flex flex-col">
      {/* Thumbnail Image */}
      <div className="w-full">
        <Image
          src={data?.thumbnail_image}
          alt="img"
          width={400}
          height={400}
          className="w-full h-[260px] object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Typography weight="medium" size="lg" className="mb-4">
          {data?.title}
        </Typography>

        <div className="mt-auto flex items-center gap-3">
          <Image
            src="/assets/guide/client.png"
            alt="img"
            width={33}
            height={33}
          />
          <Typography weight="normal" size="sm">
            {data.client}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
