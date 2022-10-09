import mantra_1_content_image_1 from "@/assets/img/chapter-1/photo1.webp";
import mantra_1_content_image_2 from "@/assets/img/chapter-1/photo2.webp";
import mantra_1_content_image_3 from "@/assets/img/chapter-1/photo3.webp";
import mantra_1_image_text_image_1 from "@/assets/img/mantra-1/photo3.webp";
import mantra_1_image_text_image_2 from "@/assets/img/mantra-1/photo4.webp";
import mantra_1_image_text_image_3 from "@/assets/img/mantra-1/photo5.webp";
import mantra_1_image_text_image_illus from "@/assets/img/mantra-1/illus2.webp";
import chapter_1_images_1 from "@/assets/img/chapter-1/photo4.webp";
import chapter_1_images_2 from "@/assets/img/chapter-1/photo5.webp";
import chapter_1_images_3 from "@/assets/img/chapter-1/photo6.webp";
import mantra_1_content_image_4 from "@/assets/img/chapter-1/photo7.webp";

import mantra_2_content_image_1 from "@/assets/img/mantra-2/photo1.webp";
import mantra_2_content_image_2 from "@/assets/img/mantra-2/photo2.webp";
import mantra_2_image_text_image_1 from "@/assets/img/mantra-2/photo3.webp";
import mantra_2_image_text_image_2 from "@/assets/img/mantra-2/photo4.webp";
import mantra_2_image_text_image_3 from "@/assets/img/mantra-2/photo5.webp";

import mantra_3_simpe_image from "@/assets/img/mantra-3/photo1.webp";
import mantra_3_image_citation_1 from "@/assets/img/mantra-3/photo2.webp";
import mantra_3_image_citation_2 from "@/assets/img/mantra-3/photo3.webp";
import mantra_3_image_citation_3 from "@/assets/img/mantra-3/photo4.webp";
import mantra_3_image_citation_4 from "@/assets/img/mantra-3/photo5.webp";

import mantra_4_image_text_image_1 from "@/assets/img/mantra-4/photo1.webp";
import mantra_4_simpe_image from "@/assets/img/mantra-4/photo2.webp";
import mantra_4_image_text_image_illus from "@/assets/img/mantra-4/illus1.webp";

import mantra_5_simpe_image from "@/assets/img/mantra-5/photo1.webp";
import mantra_5_image_citation_1 from "@/assets/img/mantra-5/photo2.webp";
import mantra_5_image_citation_2 from "@/assets/img/mantra-5/photo3.webp";
import mantra_5_image_citation_4 from "@/assets/img/mantra-5/photo4.webp";

export const getSliders = () => {
  return [
    {
      components: "Chapter_1",
      images: {
        mantra_content_image_1: mantra_1_content_image_1,
        mantra_content_image_2: mantra_1_content_image_2,
        mantra_content_image_3: mantra_1_content_image_3,
        mantra_content_image_4: mantra_1_content_image_4,
        mantra_image_text_image_1: mantra_1_image_text_image_1,
        mantra_image_text_image_2: mantra_1_image_text_image_2,
        mantra_image_text_image_3: mantra_1_image_text_image_3,
        mantra_image_text_image_illus: mantra_1_image_text_image_illus,
        chapter_images_1: chapter_1_images_1,
        chapter_images_2: chapter_1_images_2,
        chapter_images_3: chapter_1_images_3,
      },
      words: [
        "chapter-1-word-1",
        "chapter-1-word-2",
        "chapter-1-word-3",
        "chapter-1-word-4",
      ],
    },
    {
      components: "Chapter_2",
      images: {
        mantra_content_image_1: mantra_2_content_image_1,
        mantra_content_image_2: mantra_2_content_image_2,
        mantra_image_text_image_1: mantra_2_image_text_image_1,
        mantra_image_text_image_2: mantra_2_image_text_image_2,
        mantra_image_text_image_3: mantra_2_image_text_image_3,
      },
    },
    {
      components: "Chapter_3",
      images: {
        mantra_simpe_image: mantra_3_simpe_image,
        mantra_image_citation_1: mantra_3_image_citation_1,
        mantra_image_citation_2: mantra_3_image_citation_2,
        mantra_image_citation_3: mantra_3_image_citation_3,
        mantra_image_citation_4: mantra_3_image_citation_4,
      },
    },
    {
      components: "Chapter_4",
      images: {
        mantra_image_text_image_1: mantra_4_image_text_image_1,
        mantra_simpe_image: mantra_4_simpe_image,
        mantra_image_text_image_illus: mantra_4_image_text_image_illus,
      },
    },
    {
      components: "Chapter_5",
      images: {
        mantra_simpe_image: mantra_5_simpe_image,
        mantra_image_citation_1: mantra_5_image_citation_1,
        mantra_image_citation_2: mantra_5_image_citation_2,
        mantra_image_citation_4: mantra_5_image_citation_4,
      },
    },
  ];
};
