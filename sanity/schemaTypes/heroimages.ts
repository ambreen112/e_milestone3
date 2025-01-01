export default {
  name: "heroimage", // Name of the schema
  title: "Two Hero Images", // Title that will be displayed in the Sanity Studio
  type: "document", // The type is a document (not an object or other types)
  fields: [
    {
      name: "image4", // The name of the first image field
      type: "image", // The field type is 'image'
      title: "First Image", // The label that will be shown in the Sanity Studio
    },
    {
      name: "image5", // The name of the second image field
      type: "image", // The field type is 'image'
      title: "Second Image", // The label that will be shown in the Sanity Studio
    },
  ],
};

   