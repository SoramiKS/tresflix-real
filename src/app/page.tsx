import { HomeCarousel } from "@/components/homecarousel";

export default function Home() {
    return (
        <div className="w-full h-full p-6">
            <div className="h-full flex flex-col items-center px-10">
                <div className="w-full ">
                    {/* Search Bar Section */}
                    <input
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-gray-300 rounded-full px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search movies..."
                        type="text"
                    />


                        <div className="h-1/2">
                            <HomeCarousel />
                        </div>

                    {/* Popular Movies Section */}
                    <section className="mt-8">

                        <h2 className="font-extrabold text-sm sm:text-base mb-3">Popular Movies</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Movie 1 */}
                            <div>
                                <img
                                    alt="Explosion Adventure movie scene with man holding two guns and explosion in background"
                                    className="w-full rounded-lg object-cover aspect-[4/3]"
                                    height="300"
                                    src="https://storage.googleapis.com/a1aa/image/5f97a793-50dd-48e7-eba0-49a1677560ce.jpg"
                                    width="400"
                                />
                                <h3 className="font-extrabold text-xs sm:text-sm mt-2">Explosion Adventure</h3>
                                <p className="text-[9px] sm:text-xs text-gray-700">
                                    An action-packed journey of survival and heroism.
                                </p>
                            </div>
                            {/* Movie 2 */}
                            <div>
                                <img
                                    alt="Love in Bloom movie scene with couple sitting on car under lights and greenery"
                                    className="w-full rounded-lg object-cover aspect-[4/3]"
                                    height="300"
                                    src="https://storage.googleapis.com/a1aa/image/008628ff-599e-4e43-9f22-f87291456ec3.jpg"
                                    width="400"
                                />
                                <h3 className="font-extrabold text-xs sm:text-sm mt-2">Love in Bloom</h3>
                                <p className="text-[9px] sm:text-xs text-gray-700">
                                    A heartwarming romantic comedy that will make you smile.
                                </p>
                            </div>
                            {/* Movie 3 */}
                            <div>
                                <img
                                    alt="Future City movie scene with futuristic city, spaceship, and tall buildings"
                                    className="w-full rounded-lg object-cover aspect-[4/3]"
                                    height="300"
                                    src="https://storage.googleapis.com/a1aa/image/58d7153e-49fd-4ac7-2569-7ded570daf63.jpg"
                                    width="400"
                                />
                                <h3 className="font-extrabold text-xs sm:text-sm mt-2">Future City</h3>
                                <p className="text-[9px] sm:text-xs text-gray-700">
                                    Explore the mysteries of a world beyond our imagination.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Top-Rated Movies Section */}
                    <section className="mt-10">
                        <h2 className="font-extrabold text-sm sm:text-base mb-3">Top-Rated Movies</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Movie 1 */}
                            <div>
                                <img
                                    alt="Courtroom Drama movie scene with man in suit in courtroom with audience"
                                    className="w-full rounded-lg object-cover aspect-[4/3]"
                                    height="300"
                                    src="https://storage.googleapis.com/a1aa/image/3691183a-f30a-4299-0b2b-969e75f59268.jpg"
                                    width="400"
                                />
                                <h3 className="font-extrabold text-xs sm:text-sm mt-2">Courtroom Drama</h3>
                                <p className="text-[9px] sm:text-xs text-gray-700">
                                    A gripping tale of justice and redemption.
                                </p>
                            </div>
                            {/* Movie 2 */}
                            <div>
                                <img
                                    alt="Mystic Forest movie scene with magical forest and sunlight filtering through trees"
                                    className="w-full rounded-lg object-cover aspect-[4/3]"
                                    height="300"
                                    src="https://storage.googleapis.com/a1aa/image/6de327c2-b6ea-446b-f3dc-06207abd7445.jpg"
                                    width="400"
                                />
                                <h3 className="font-extrabold text-xs sm:text-sm mt-2">Mystic Forest</h3>
                                <p className="text-[9px] sm:text-xs text-gray-700">
                                    Enter a world of magic and wonder.
                                </p>
                            </div>
                            {/* Movie 3 */}
                            <div>
                                <img
                                    alt="Animated Joy movie scene with colorful animated characters around globe"
                                    className="w-full rounded-lg object-cover aspect-[4/3]"
                                    height="300"
                                    src="https://storage.googleapis.com/a1aa/image/b5bd173e-46b6-4f9a-ebcb-5d25a7f09542.jpg"
                                    width="400"
                                />
                                <h3 className="font-extrabold text-xs sm:text-sm mt-2">Animated Joy</h3>
                                <p className="text-[9px] sm:text-xs text-gray-700">
                                    A delightful animated adventure for all ages.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
