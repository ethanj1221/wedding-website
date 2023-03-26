import Navbar from "../components/Navbar";

const files = [
  {
    source:
      "https://res.cloudinary.com/dov31rv0v/image/upload/v1678644641/wedding%20website/photo_gallery/TCR66495_mmohux.webp",
  },
  {
    source:
      "https://res.cloudinary.com/dov31rv0v/image/upload/v1678644794/wedding%20website/photo_gallery/TCR66516_dfdxrm.webp",
  },
  { source: 'https://res.cloudinary.com/dov31rv0v/image/upload/v1679869361/wedding%20website/photo_gallery/IMG_20220928_100017_413_x7fyy5.webp' },
  {
    source: "https://res.cloudinary.com/dov31rv0v/image/upload/v1679869346/wedding%20website/photo_gallery/DSC04831_ense9t.jpg"
  },
  {
    source:
      "https://res.cloudinary.com/dov31rv0v/image/upload/v1678644796/wedding%20website/photo_gallery/TCR66537-_1__ynvgql.webp",
  },
  {
    source: 'https://res.cloudinary.com/dov31rv0v/image/upload/v1679869412/wedding%20website/photo_gallery/DSC04929_cosjm9.jpg'
  },
  { source: 'https://res.cloudinary.com/dov31rv0v/image/upload/v1679869404/wedding%20website/photo_gallery/DSC04688_mcmb64.jpg' },
  
  {
    source:
      "https://res.cloudinary.com/dov31rv0v/image/upload/v1678644930/wedding%20website/photo_gallery/TCR66534_fnqh7z.webp",
  },
  {
    source:
      "https://res.cloudinary.com/dov31rv0v/image/upload/v1678644933/wedding%20website/photo_gallery/TCR66546_hjzesi.webp",
  },
  {
    source:
      "https://res.cloudinary.com/dov31rv0v/image/upload/v1678645084/wedding%20website/photo_gallery/TCR66547_gfus40.webp",
  },
  //
];

export default function Example() {
  return (
    <div className="pt-32 px-10 relative flex justify-center ">
      <Navbar />
      <ul className=" w-full max-w-screen-2xl gap-x-4 gap-y-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={file.source}
                alt=""
                className="pointer-events-none object-cover "
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
