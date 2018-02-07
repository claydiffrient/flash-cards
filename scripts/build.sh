[ -z "$PUBLIC_URL" ] && PUBLIC_URL="./"
parcel build ./src/index.html --public-url $PUBLIC_URL --no-cache