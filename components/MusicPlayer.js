import dynamic from 'next/dynamic'

const MusicPlayer = dynamic(
  () => import('@/components/PotPlayer'),
  { ssr: false }
)
export default MusicPlayer
