import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

function ContactUs(props) {

    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientPhone, setClientPhone] = useState("")
    const [clientCompany, setClientCompany] = useState("")
    const [clientMessage, setClientMessage] = useState("")
    const [statueMsg, setStatueMsg] = useState("")

    const handleContactSubmit = (e) => {
        e.preventDefault();
        if (!clientName || !clientMessage) {
            setStatueMsg("Please fill in the Name and Message fields.");
            return;
        }

        const templateParams = {
            clientname: clientName,
            clientemail: clientEmail,
            clientphone: clientPhone,
            clientcompany: clientCompany,
            clientmessage: clientMessage
        };

        emailjs.send('service_gbb83sg', 'template_k9gqqyf', templateParams, 'yFqsdfAXjX1-UD2ly')
            .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatueMsg("Message sent successfully!");
                    setClientName("");
                    setClientEmail("");
                    setClientPhone("");
                    setClientCompany("");
                    setClientMessage("");
                }, (error) => {
                    console.error('FAILED...', error);
                    setStatueMsg("Failed to send message. Please try again later.");
                }
            );
    }


    return (
        <div className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact
                        us</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Any questions? plese
                        feel free to contact us</p>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                        <div className="overflow-hidden bg-white rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <p className="mt-8 text-lg font-medium text-gray-900">+64-20-4242-385</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <p className="mt-8 text-lg font-medium text-gray-900">jiyu387@ess.ais.ac.nz</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">28a Linwood
                                    Avenue, Mt Albert, Auckland, New Zealand</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                            <form action="#" method="POST" className="mt-14" onSubmit={handleContactSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Your
                                            name * </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="client_name" id=""
                                                   placeholder="Enter your full name"
                                                   className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-rose-800 caret-rose-800"
                                                   value={clientName}
                                                   onChange={(e) => setClientName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Email
                                            address </label>
                                        <div className="mt-2.5 relative">
                                            <input type="email" name="client_email" id=""
                                                   placeholder="Enter your full name"
                                                   className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-rose-800 caret-rose-800"
                                                   value={clientEmail}
                                                   onChange={(e) => setClientEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Phone
                                            number </label>
                                        <div className="mt-2.5 relative">
                                            <input type="tel" name="client_phone" id=""
                                                   placeholder="Enter your full name"
                                                   className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-rose-800 caret-rose-800"
                                                   value={clientPhone}
                                                   onChange={(e) => setClientPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Company
                                            name </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="client_company" id=""
                                                   placeholder="Enter your full name"
                                                   className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-rose-800 caret-rose-800"
                                                   value={clientCompany}
                                                   onChange={(e) => setClientCompany(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor=""
                                               className="text-base font-medium text-gray-900"> Message *</label>
                                        <div className="mt-2.5 relative">
                                            <textarea name="client_message" id="" placeholder=""
                                                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-rose-800 caret-rose-800"
                                                      value={clientMessage}
                                                      onChange={(e) => setClientMessage(e.target.value)}
                                                      rows="4">

                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#4e0317] hover:bg-rose-800 border border-transparent rounded-md focus:outline-none  focus:bg-rose-800">
                                            Send
                                        </button>
                                    </div>
                                    {statueMsg && (
                                        <p className="sm:col-span-2 text-center mt-4 text-sm text-rose-600"> {statueMsg}</p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;