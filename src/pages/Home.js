import Accord from "../components/Accord";
import Header from "../components/Header";
import HomeLoan from "../assets/HomeLoan.jpg"
import CarLoan from "../assets/CarLoan.jpg"
import PersonalLoan from "../assets/Personal.jpg"
import EducationLoan from "../assets/Education.jpg"
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      HomeLoan,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    type: "Home loan"
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:CarLoan,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    type:"Car loan"
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:PersonalLoan,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    type: "Personal Loan"
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:EducationLoan,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    type: "Education Loan"
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="flex @apply text-3xl font-extrabold bg-gradient-to-bl from-blue-500 to-purple-800 bg-clip-text text-transparent">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Accord />
    </>
  );
}
