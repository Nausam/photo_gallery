import Upload from "@/components/Upload";
import View from "@/components/View";
import cloudinary from "cloudinary";

interface MyImage {
  public_id: string;
}

export default async function Home() {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(4)
    .execute()) as { resources: MyImage[] };

  return (
    <main className="flex flex-col items-center">
      <div className="md:mt-20 mt-32">
        <Upload />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 p-2 mt-20 max-w-6xl mx-auto items-center justify-center">
        {res.resources.map((item, i) => {
          return (
            <div key={i}>
              <View src={item.public_id} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
