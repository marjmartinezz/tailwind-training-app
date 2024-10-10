import Image from 'next/image';

const TeamSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
              <Image
                className="h-16 w-16 rounded-full"
                src="/photo.jpg"
                alt="team"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Leslie Alexander
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CEO
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image
                className="h-16 w-16 rounded-full"
                src="/team-2.jpg"
                alt="team"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Michael Foster
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Co-Founder / CTO
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image
                className="h-16 w-16 rounded-full"
                src="/team-3.jpg"
                alt="team"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Dries Vincent
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Business Relations
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image
                className="h-16 w-16 rounded-full"
                src="/team-4.jpg"
                alt="team"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Lindsay Walton
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Front-end Developer
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
