import {faker} from "@faker-js/faker";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const GenerateData = (count) => {
  const data = Array(count)
    .fill(0)
    .map(() => {
      return {
        title: faker.lorem.sentence(),
        icon: faker.image.url({ width: 100, height: 100, category: 'abstract', grayscale: true }),
        date: dayjs(faker.date.past()).format("MMM, DD YYYY"),
        description: faker.lorem.paragraph(),
      };
    });

  console.log(data);

  return data;
};

export default GenerateData;
