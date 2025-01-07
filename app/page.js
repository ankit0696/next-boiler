import {ExclamationCircleIcon, XCircleIcon} from "@heroicons/react/20/solid";

export default async function Home() {
    const faqs = [];

    return (
        <main>

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/*dark theme */}
                <div className="rounded-md bg-gray-700 p-4">
                    <div className="flex">
                        <div className="shrink-0">
                            <XCircleIcon aria-hidden="true" className="size-5 text-red-400"/>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-400">Unauthorized Access</h3>
                            <div className="mt-2 text-sm text-red-300">
                                <div>
                                    Private IP address: 192.168.1.3
                                </div>
                                <div>
                                    fe80::50dc:eeff:fe21:50c3
                                </div>
                                <div>
                                    Device MAC address: e8:f7:91:94:41:72
                                </div>
                                {/* Logging into someone else account is punishable by law */}
                                <div>
                                    Location: India
                                </div>
                                <br/>
                                Associated information:
                                <div>
                                    Instagram profile: anjali_ahuja__aj
                                </div>
                                <div>
                                    IP address: 192.168.1.3
                                </div>
<div className="mt-2 text-sm text-red-300">
    {/*disclaimer icon here*/}
    <div className="shrink-0">
        <ExclamationCircleIcon aria-hidden="true" className="size-5 text-red-400"/>
    </div>
    It is illegal to access someone else account without their permission and is punishable by law.
</div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="lg:col-span-5">
                                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                                    Frequently asked questions
                                </h2>
                                <p className="mt-4 text-base/7 text-pretty text-gray-600">
                                    Can’t find the answer you’re looking for? Reach out to our{' '}
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        customer support
                                    </a>{' '}
                                    team.
                                </p>
                            </div>
                            <div className="mt-10 lg:col-span-7 lg:mt-0">
                                <dl className="space-y-10">
                                    {faqs.map((faq) => (
                                        <div key={faq.question}>
                                            <dt className="text-base/7 font-semibold text-gray-900">{faq.question}</dt>
                                            <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
