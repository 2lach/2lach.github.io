#!/bin/bash
# Loop through all specified image files
for img in "$@"; do
	# Use cwebp to convert the image to WebP format with a specific quality setting
	cwebp -q 80 "$img" -o "${img%.*}.webp"
done
