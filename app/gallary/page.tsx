import View from "@/components/View";
import cloudinary from "cloudinary";
import React from "react";

interface MyImage {
  public_id: string;
}

const page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "asc")
    // .max_results(5)
    .execute()) as { resources: MyImage[] };

  return (
    <section className="w-full mt-20">
      <div className="flex max-w-6xl flex-col mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-3 gap-4 p-2 mt-10">
          {res.resources.map((item, i) => {
            return (
              <div key={i}>
                <View src={item.public_id} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
