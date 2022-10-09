import mantra_1_content_image_1 from "@/assets/img/chapter-1/photo1.webp";
import mantra_1_content_image_2 from "@/assets/img/chapter-1/photo2.webp";
import mantra_1_content_image_3 from "@/assets/img/chapter-1/photo3.webp";
import chapter_1_images_1 from "@/assets/img/chapter-1/photo4.webp";
import chapter_1_images_2 from "@/assets/img/chapter-1/photo5.webp";
import chapter_1_images_3 from "@/assets/img/chapter-1/photo6.webp";
import mantra_1_content_image_4 from "@/assets/img/chapter-1/photo7.webp";
import mantra_1_content_image_5 from "@/assets/img/chapter-1/photo2.webp";

import mantra_2_content_image_1 from "@/assets/img/mantra-2/photo1.webp";
import mantra_2_content_image_2 from "@/assets/img/mantra-2/photo2.webp";
import mantra_2_content_image_3 from "@/assets/img/mantra-2/photo3.webp";
import mantra_2_content_image_4 from "@/assets/img/mantra-2/photo4.webp";
import mantra_2_content_image_5 from "@/assets/img/mantra-2/photo5.webp";
import mantra_2_simple_image from "@/assets/img/mantra-2/oldvine.webp";

import mantra_3_content_image_1 from "@/assets/img/mantra-3/photo1.webp";
import mantra_3_content_image_2 from "@/assets/img/mantra-3/photo2.webp";
import mantra_3_content_image_3 from "@/assets/img/mantra-3/photo3.webp";
import mantra_3_content_image_4 from "@/assets/img/mantra-3/photo4.webp";
import mantra_3_content_image_5 from "@/assets/img/mantra-3/cuvon.webp";
import mantra_3_simpe_image from "@/assets/img/mantra-3/photo4.webp";

import mantra_4_content_image_1 from "@/assets/img/mantra-4/photo1.webp";
import mantra_4_content_image_2 from "@/assets/img/mantra-4/photo2.webp";
import mantra_4_content_image_3 from "@/assets/img/mantra-4/photo3.webp";
import mantra_4_content_image_4 from "@/assets/img/mantra-4/photo5.webp";
import mantra_4_content_image_5 from "@/assets/img/mantra-4/photo4.webp";

import mantra_5_content_image_1 from "@/assets/img/mantra-5/photo1.webp";
import mantra_5_content_image_2 from "@/assets/img/mantra-5/photo2.webp";
import mantra_5_content_image_3 from "@/assets/img/mantra-5/photo3.webp";
import chapter_5_images_1 from "@/assets/img/mantra-5/photo6.webp";
import chapter_5_images_2 from "@/assets/img/mantra-5/photo7.webp";
import chapter_5_images_3 from "@/assets/img/mantra-5/photo8.webp";
import mantra_5_content_image_4 from "@/assets/img/mantra-5/photo4.webp";
import mantra_5_content_image_5 from "@/assets/img/mantra-5/photo5.webp";

export const getSliders = () => {
  return [
    {
      components: "Chapter_1",
      images: {
        mantra_content_image_1: mantra_1_content_image_1,
        mantra_content_image_2: mantra_1_content_image_2,
        mantra_content_image_3: mantra_1_content_image_3,
        mantra_content_image_4: mantra_1_content_image_4,
        mantra_content_image_5: mantra_1_content_image_5,
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
        mantra_content_image_3: mantra_2_content_image_3,
        mantra_content_image_4: mantra_2_content_image_4,
        mantra_content_image_5: mantra_2_content_image_5,
        mantra_simpe_image: mantra_2_simple_image,
      },
      words: [
        "chapter-2-word-1",
        "chapter-2-word-2",
        "chapter-2-word-3",
        "chapter-2-word-4",
      ],
    },
    {
      components: "Chapter_3",
      images: {
        mantra_content_image_1: mantra_3_content_image_1,
        mantra_content_image_2: mantra_3_content_image_2,
        mantra_content_image_3: mantra_3_content_image_3,
        mantra_content_image_4: mantra_3_content_image_4,
        mantra_content_image_5: mantra_3_content_image_5,
        mantra_simpe_image: mantra_3_simpe_image,
      },
      words: [
        "chapter-1-word-1",
        "chapter-1-word-2",
        "chapter-1-word-3",
        "chapter-1-word-4",
      ],
    },
    {
      components: "Chapter_4",
      images: {
        mantra_content_image_1: mantra_4_content_image_1,
        mantra_content_image_2: mantra_4_content_image_2,
        mantra_content_image_3: mantra_4_content_image_3,
        mantra_content_image_4: mantra_4_content_image_4,
        mantra_content_image_5: mantra_4_content_image_5,
      },
      words: [
        "chapter-1-word-1",
        "chapter-1-word-2",
        "chapter-1-word-3",
        "chapter-1-word-4",
      ],
    },
    {
      components: "Chapter_5",
      images: {
        mantra_content_image_1: mantra_5_content_image_1,
        mantra_content_image_2: mantra_5_content_image_2,
        mantra_content_image_3: mantra_5_content_image_3,
        mantra_content_image_4: mantra_5_content_image_4,
        mantra_content_image_5: mantra_5_content_image_5,
        chapter_images_1: chapter_5_images_1,
        chapter_images_2: chapter_5_images_2,
        chapter_images_3: chapter_5_images_3,
      },
    },
  ];
};
