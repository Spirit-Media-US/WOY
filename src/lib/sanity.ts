import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
	projectId: 'u8tg0g1c',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(sanityClient) as any;
export function urlFor(source: any) {
	return builder.image(source);
}
