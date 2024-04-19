import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import e from './assets/e.png'
import i from './assets/i.jpeg'
import l from './assets/l.png'

const HomeView = () => {
  return (
    <div className="">
      <div className="max-w-[full] mx-auto ">
        <div className="home p-10 text-white">
          <div className="max-w-[1200px] mx-auto md:h-[70vh] mt-24">
            <div className="flex">
              <div>
                <Image
                  src="/Vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert border-r-purple-700"
                  width={100}
                  height={24}
                  priority
                />
              </div>

              <Image
                src="/Vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </div>
            <h2 className="font-bold text-[30px] md:text-[54px] max-w-[600px]">
              Crypto Academy: Your Gateway to Crypto Success
            </h2>
            <div className="flex my-5">
              <span className=" font-[50] tracking-[0.7rem]">SPONSORED BY</span>
              <Image
                src="/Vercel.svg"
                alt="Vercel Logo"
                className="dark:invert border-r-purple-700"
                width={100}
                height={24}
                priority
              />
            </div>
            <ul className="pt-5">
              <li>Cryto Basics 101</li>
              <li>Understanding Blockchain</li>
              <li>Wallet Security: Safeguard</li>
            </ul>
          </div>
        </div>

        <div className="relative bg-[#A188FE1A]">
          <div className="max-w-[1200px] py-24 md:gap-6 p-10 mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center">
            <Image
              src="/firstImage.jpeg"
              alt="firstimage"
              width={509}
              height={287}
              className="items-center mx-auto rounded-md shadow-lg "
            />
            <div className="p-10">
              <h2 className="font-bold text-[30px] md:text-[40px] lg:md:text-[40px]">
                Introduction to Crypto Academy
              </h2>
              <p className="text-[11px] md:text-[16px] my-6">
                Welcome to Crypto Academy, your go-to destination for mastering
                cryptocurrency trading. Our beginner-friendly courses are
                designed to demystify the world of digital assets on the CoinW
                Exchange.
              </p>
              <button className="rounded-[8px] bg-[#2655FF] shadow-md p-2 md:p-4 text-white text-[11px] md:text-[14px] lg:text-[18px]">
                Enroll Today: Unlock Your Crypto Potential {">"}
              </button>
            </div>
          </div>
        </div>

        {/* {courser offering} */}
        <div className="pb-20 ">
          <div className="pt-16 p-5 sm:p-10 max-w-[400px] md:max-w-[1200px] mx-auto items-center">
            <h2 className="font-[600] text-[30px] lg:text-[48px]">
              Course Offerings
            </h2>
            <div className="mt-5">
              <div className="flex border p-5 rounded-md items-center gap-3">
                <Image
                  src="/next.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
                <h3 className="font-bold text-[12px] md:text-[16px] pr-2 border-r-2">
                  Crypto Basics 101: A Beginner's Guide
                </h3>
                <p className="text-[9px] md:text-[12px] ">
                  Learn the essentials of trading on CoinW, from navigating the
                  platform to making your first trade.
                </p>
              </div>
              <div className="flex border p-5 rounded-md items-center my-3 gap-3">
                <Image
                  src="/next.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
                <h3 className="font-bold text-[13px] md:text-[16px] pr-2 border-r-2">
                  Understanding Blockchain: The Foundation
                </h3>
                <p className="text-[9px] md:text-[12px] ">
                  Gain insights into blockchain technology and its role in
                  operations.
                </p>
              </div>
              <div className="flex border p-5 rounded-md items-center gap-3">
                <Image
                  src="/Vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
                <h3 className="font-bold text-[13px] md:text-[16px] pr-2 border-r-2">
                  Wallet Security: Safeguarding Your Assets
                </h3>
                <p className="text-[9px] md:text-[12px]">
                  Discover how to securely store your cryptocurrencies.
                </p>
              </div>
            </div>
          </div>

          {/* {why choose crypto academy?} */}

          <div className="pt-20 max-w-[400px] md:max-w-[1200px] mx-auto p-10">
            <h2 className="font-[600] text-[30px] lg:text-[48px]">
              Why Choose Crypto Academy?
            </h2>
            <div className="p-5">
              <div className="grid grid-cols-1  md:flex pt-5 md:pt-16 items-center mx-auto">
                <Image
                  className="shadow-md rounded-md"
                  src={e}
                  alt="e"
                  width={533}
                  height={283}
                />
                <div className="p-10 md:p-20">
                  <h3 className="font-bold text-[25px] md:text-[32px]">
                    Expert Instructors
                  </h3>
                  <p className="font-500 text-[13px] md:text-[16px] text-[#5B5B5B]">
                    Learn from experienced professionals who provide clear
                    explanations and real-world examples.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1  md:flex pt-5 md:pt-16 items-center mx-auto">
              <div className=" hidden md:block p-10 md:p-20">
                <h3 className="font-bold text-[25px] md:text-[32px]">
                  Interactive Learning
                </h3>
                <p className="font-500 text-[13px] md:text-[16px] text-[#5B5B5B]">
                  Engage in quizzes, discussions, and live Q&A sessions for a
                  dynamic learning experience.
                </p>
              </div>
              <Image
                className="shadow-md rounded-md"
                src={i}
                alt="e"
                width={533}
                height={283}
              />
              <div className="block md:hidden p-10 md:p-20">
                <h3 className="font-bold text-[25px] md:text-[32px]">
                  Interactive Learning
                </h3>
                <p className="font-500 text-[13px] md:text-[16px] text-[#5B5B5B]">
                  Engage in quizzes, discussions, and live Q&A sessions for a
                  dynamic learning experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1   md:flex pt-10 md:pt-16 items-center mx-auto">
              <Image
                className="shadow-md rounded-md"
                src={l}
                alt="e"
                width={533}
                height={283}
              />
              <div className="p-10 md:p-20">
                <h3 className="font-bold text-[25px] md:text-[30px]">
                  Lifetime Access
                </h3>
                <p className="font-500 text-[13px] md:text-[16px] text-[#5B5B5B]">
                  Enjoy lifetime access to course materials and updates,
                  ensuring you stay informed about the latest trends.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* {prizes to be won} */}
        <div className="bg-yellow-50 ">
          <div className="pt-10 md:pt-20 rounded-lg max-w-[400px] md:max-w-[1200px] mx-auto p-10">
            <div className="flex justify-between">
              <h1 className="text-[18px] md:text-2xl font-bold mb-4">
                Prizes to be Won
              </h1>
              <div className="flex items-center space-x-4">
                <Image
                  src="/Vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
                <Image
                  src="/Vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center">
              <div className=" items-start align-top relative">
                <h3 className="font-bold text-[14px] md:text-[24px] absolute top-[-90px] md:top-[-120px]">
                  CoinW Champion's Arena
                </h3>
                <div>
                  <h3 className="text-[11px] md:text-[14px]">Total Rewards:</h3>{" "}
                  <button className="border mt-2 p-2 rounded-md border-orange-400 bg-orange-100 text-orange-600 font-[600]">
                    $1 Million
                  </button>
                </div>
              </div>
              <div className="list-none outline-none col-span-2  list-inside mt-4 p-10 ">
                <li className="border p-1 md:p-4 rounded-md text-[11px] md:text-[14px]">
                  $200,000 Triumph with strategy | 2024/4/7 – 2024/4/30
                </li>
                <li className="border p-1 md:p-4 my-1 md:my-3 rounded-md text-[11px] md:text-[14px]">
                  $20,000 Early Bird Reward | 2024/4/7 – 2024/4/30
                </li>
                <li className="border p-1 md:p-4 rounded-md text-[11px] md:text-[14px]">
                  $20,000 Player Squad vs. Coach Squad Competition
                </li>
                <li className="border p-1 md:p-4 my-1 md:my-3 rounded-md text-[11px] md:text-[14px]">
                  $560,000 Future Trading Competition
                </li>
                <li className="border p-1 md:p-4 rounded-md text-[11px] md:text-[14px]">
                  $200,000 Spot Trading Competition
                </li>
              </div>
            </div>
          </div>
        </div>

        {/* {footer} */}
        <div className="relative">
          <div className="z-10 text-white">
            <div className="relative w-full flex bg-[#1f1842]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050314] opacity-100 op rounded-lg"></div>
              <Image
                src="/firstImage.jpeg"
                alt="firstimage"
                width={700}
                height={400}
                className="object-cover mask"
              />
              <div className="absolute inset-0 flex flex-col justify-self-end p-6">
                <div className="p-5 md:p-20">
                  <h2 className="text-[25px] md:text-[48px] font-semibold">
                    Join Crypto Academy today
                  </h2>
                  <p className="text-[13px] sm:text-[16px] mt-2">
                    Empower yourself with the knowledge and skills needed to
                    thrive in cryptocurrency trading.
                  </p>
                  <button className="bg-blue-600 text-white mt-1 md:mt-4 px-4 py-2 p-5 rounded-md hover:bg-blue-700">
                    Join today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView
