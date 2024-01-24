import sponsor1 from '@/assets/images/webp/image 4.webp'
import sponsor2 from '@/assets/images/webp/image 5.webp'
import sponsor3 from '@/assets/images/webp/image 6.webp'
import sponsor4 from '@/assets/images/webp/image 7.webp'
import sponsor5 from '@/assets/images/webp/image 8.webp'

export interface SponsorLogo {
  id: number
  link: string
}

const sponsorLogo: SponsorLogo[] = [
  {
    id: 1,
    link: sponsor1
  },
  {
    id: 2,
    link: sponsor2
  },
  {
    id: 3,
    link: sponsor3
  },
  {
    id: 4,
    link: sponsor4
  },
  {
    id: 5,
    link: sponsor5
  }
]

export default sponsorLogo
