
import Marquee from "react-fast-marquee";
export default function Brands() {
    const srcArray = [
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d9f187d3886afcf0c_swtantra.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d19ebc9f547ee13d1_aroka.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471e19ebc9f547ee1453_the%20whole%20truth.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaa30f40ffaa9438ea5_swiss%20beauty%201.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958f53ea35cd012178e_DILIP%20SONIGARA.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c8d12e2df177eeec2_ajanta.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c00347cedbc54fcdb_the%20white%20willow.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c7ce8d5a488d39c51_maisha.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77ce4473d4ee696e286_TAILOR%20AND%20CIRCUS.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    ];

    return (
        <div className="bg-white h-20 m-5 my-10">
            <div>
                <Marquee direction="left" speed={200}>
                    {srcArray.map((item, index) => (
                        <div key={index} className=" p-2 ">
                            <img src={item} className=" w-28 h-28 mx-10" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}