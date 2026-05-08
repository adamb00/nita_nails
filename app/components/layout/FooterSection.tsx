import Image from 'next/image';

const LINKS = {
  notino: 'https://www.notino.hu/szalonok/nita-nails/',
  facebook: 'https://www.facebook.com/profile.php?id=100094092601827',
  tiktok:
    'https://www.tiktok.com/@Duhati91?fbclid=IwY2xjawRpr-hleHRuA2FlbQIxMABicmlkETJNemVIa1VnNWtEbWQwQ0VGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuqOEJ2ujlwq8Gj30BynU9EO6QuqPVSw1c_urUzGQ-dxRswxKgoF7YIwQX9T_aem_ZPL0AfhW9sS4McBknlJrvw',
  instagram: 'https://www.instagram.com',
  phone: 'tel:+36305867442',
  email: 'mailto:duhati91@gmail.com',
};

const BANNER_IMAGES = [
  'https://dmrz39codqjlj.cloudfront.net/cosmetics/65eba642-8d60-4cd7-80d1-337d5a132088_crystal%20nails%20logo-thumbnail.png',
  'https://dmrz39codqjlj.cloudfront.net/cosmetics/880c6090-84a9-45f5-859d-73e462249de8_Sara_Beauty-thumbnail.png',
  'https://dmrz39codqjlj.cloudfront.net/cosmetics/fcb256df-26c9-4cbb-96ed-bba7b36861d5_V%C3%BDst%C5%99i%C5%BEek-thumbnail.PNG',
  'https://dmrz39codqjlj.cloudfront.net/cosmetics/f10491e4-9e79-4c1b-ae79-caf2b34b4734_V%C3%BDst%C5%99i%C5%BEek-thumbnail.PNG',
  'https://dmrz39codqjlj.cloudfront.net/cosmetics/2cdf28d1-a799-447d-8535-ad68dc4fb714_cropped-LOGO-CALLUX_-1-thumbnail.png',
  'https://dmrz39codqjlj.cloudfront.net/cosmetics/2d35df0e-5cbd-412a-9aae-d988f96e3582_sta%C5%BEen%C3%BD%20soubor%20(8)-thumbnail.png',
];

export default function FooterSection() {
  return (
    <footer className='-mt-px h-screen w-screen snap-start shrink-0 overflow-y-auto bg-linear-to-b from-[#bf6d6c] to-[#2d1d1d] px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 text-[#f8ece8]'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='mb-6 sm:mb-8 rounded-2xl  shadow-xl p-3 sm:p-4 md:p-5'>
          <p className='mb-3 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white'>
            Partnerek
          </p>
          <div className='grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-6'>
            {BANNER_IMAGES.map((src, index) => (
              <div
                key={src}
                className='h-14 sm:h-16 md:h-20 rounded-lg bg-white border border-[#d8c7bf] flex items-center justify-center p-2'
              >
                <img
                  src={src}
                  alt={`Partner banner ${index + 1}`}
                  className='max-h-full max-w-full object-contain'
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>

        <div className='grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2'>
          <div className='space-y-5 sm:space-y-6'>
            <div>
              <p className='text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#dcbeb7]'>
                Nita Nails
              </p>
              <h2 className='mt-2 font-vani text-3xl sm:text-4xl md:text-6xl leading-tight'>
                Kapcsolat
              </h2>
              <p className='mt-3 max-w-xl text-sm sm:text-base text-[#e6cdca]'>
                Foglalj időpontot online, vagy keress telefonon és e-mailben.
              </p>
            </div>

            <div className='rounded-xl border border-[#5c3a3a] bg-[#3a2525] px-4 py-3'>
              <p className='text-sm font-semibold text-white'>Parkolás</p>
              <p className='mt-1 text-sm text-[#e6cdca]'>
                Szemben és közvetlenül a ház előtt is lehet parkolni.
              </p>
            </div>

            <div className='space-y-2 sm:space-y-3 text-sm md:text-base'>
              <a
                href={LINKS.phone}
                className='block hover:text-white transition-colors break-all'
              >
                Telefon: +36 30 586 7442
              </a>
              <a
                href={LINKS.email}
                className='block hover:text-white transition-colors break-all'
              >
                E-mail: duhati91@gmail.com
              </a>
              <p className='text-[#e6cdca]'>
                Cím: Szigligeti utca 5, Hódmezővásárhely, 6800
              </p>

              <a
                href={LINKS.notino}
                target='_blank'
                rel='noreferrer'
                className='inline-flex rounded-full border border-white bg-white px-5 sm:px-6 py-2 text-[#5f3434] hover:bg-[#f5e6e1] hover:border-[#f5e6e1] transition-colors'
              >
                Időpontfoglalás
              </a>
            </div>

            <div className='flex items-center gap-3 sm:gap-5 pt-1 sm:pt-2'>
              <a
                href={LINKS.facebook}
                target='_blank'
                rel='noreferrer'
                aria-label='Facebook'
              >
                <Image
                  src='/facebook.svg'
                  alt='Facebook'
                  width={92}
                  height={20}
                  className='h-5 sm:h-6 md:h-7 w-auto'
                />
              </a>
              <a
                href={LINKS.tiktok}
                target='_blank'
                rel='noreferrer'
                aria-label='TikTok'
              >
                <Image
                  src='/tiktok.svg'
                  alt='TikTok'
                  width={92}
                  height={20}
                  className='h-5 sm:h-6 md:h-7 w-auto'
                />
              </a>
              <a
                href={LINKS.instagram}
                target='_blank'
                rel='noreferrer'
                aria-label='Instagram'
              >
                <Image
                  src='/instagram.svg'
                  alt='Instagram'
                  width={92}
                  height={20}
                  className='h-5 sm:h-6 md:h-7 w-auto'
                />
              </a>
              <a
                href={LINKS.notino}
                target='_blank'
                rel='noreferrer'
                aria-label='Notino'
              >
                <Image
                  src='/notino-white.svg'
                  alt='Notino'
                  width={92}
                  height={20}
                  className='h-4 sm:h-5 w-auto'
                />
              </a>
            </div>
          </div>

          <div className='rounded-2xl overflow-hidden border border-[#5c3a3a] bg-[#f1dfda] min-h-[280px] sm:min-h-[320px] md:min-h-[360px]'>
            <iframe
              title='Nita Nails térkép'
              src='https://www.google.com/maps?q=Szigligeti%20utca%205,%20H%C3%B3dmez%C5%91v%C3%A1s%C3%A1rhely,%206800&output=embed'
              className='h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] w-full'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
