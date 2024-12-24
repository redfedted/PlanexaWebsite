import img from "/src/images/Image10.webp";

function AppDetailsTemp() {
    const arr = [
        { feature: "Transaction Fee", basic: "$0.30+4.99%" },
        { feature: "Withdraw Fee (Host)", basic: "2%" },
    ];

    return (
        <div className="bg-[url('/src/images/fees_bg.jpg')] bg-center box-border text-white bg-cover lg:py-[3rem] py-[1rem]">
            <div className="mx-auto w-[85%] lg:w-[90%] text-center">
                {/* <h1 className="font-bold text-[2rem] lg:text-[4rem] mb-8 text-[#F49C25]">FEES</h1> */}
                {arr.map((e, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center pl-[0.938rem] lg:pl-[2.813rem] pr-[0.938rem] lg:pr-[2.813rem] text-[#533F24] bg-[#FFF1E1] mb-6 text-[0.672rem] lg:text-[2.01rem] mx-auto py-[0.538rem] font-medium rounded-lg shadow-md"
                    >
                        <h1 className="text-start lg:text-[2.01rem] text-[0.9rem]">{e.feature}</h1>
                        <h1 className="text-end lg:text-[2.01rem] text-[0.9rem]">{e.basic}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AppDetailsTemp;
