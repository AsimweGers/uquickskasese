import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nh6lsin6',
    dataset: 'production',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  },
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
