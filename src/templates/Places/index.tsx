type ImageProps = {
  width: number;
  url: string;
  height: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={`photo-${index}`} src={image.url} alt={place.name} />
      ))}
    </>
  );
}
