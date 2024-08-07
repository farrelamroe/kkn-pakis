import { useEffect, useState } from "react";
import { Card, H3 } from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";

interface Item {
  image: string;
  title: string;
  href: string;
}

interface SearchProps {
  items: Item[];
  routeTo: string;
}

export function Search({ items, routeTo }: SearchProps) {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setFilteredItems(
      items.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-[48px]">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="border-gray-300 mx-auto block w-full max-w-[375px] rounded-md border p-2"
        placeholder="Search..."
        data-aos="fade-up"
      />
      {filteredItems.length > 0 ? (
        <div
          className="mb-[100px] mt-[48px] grid items-center gap-x-[28px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4"
          data-aos="fade-up"
        >
          {filteredItems.map(({ image, title, href }) => (
            <a href={`/${routeTo}/${href}`} key={title}>
              <Card image={image} title={title} />
            </a>
          ))}
        </div>
      ) : (
        <H3 className="mb-[338px] mt-[48px] text-center">
          Artikel tidak ditemukan!
        </H3>
      )}
    </div>
  );
}
