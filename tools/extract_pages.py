
import fitz
import json
from pathlib import Path
from PIL import Image

# Project paths
PROJECT_DIR = Path(__file__).resolve().parent.parent
PDF_PATH = PROJECT_DIR / "assets/book/book.pdf"
OUTPUT_DIR = PROJECT_DIR / "assets/book/pages"
MANIFEST_PATH = PROJECT_DIR / "assets/book/pages.json"

# Rendering settings
SCALE = 1.5
JPEG_QUALITY = 90

def main():
    if not PDF_PATH.exists():
        raise FileNotFoundError(f"PDF not found: {PDF_PATH}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(PDF_PATH)

    if len(doc) != 319:
        raise ValueError(
            f"Expected 319 pages, found {len(doc)}"
        )

    manifest = []

    print(f"Extracting {len(doc)} pages...")

    for index, page in enumerate(doc):
        page_number = index + 1

        filename = f"page-{page_number:03d}.jpg"
        output_path = OUTPUT_DIR / filename

        # Render the original PDF page without OCR
        pix = page.get_pixmap(
            matrix=fitz.Matrix(SCALE, SCALE),
            colorspace=fitz.csRGB,
            alpha=False
        )

        # Convert to JPEG
        image = Image.frombytes(
            "RGB",
            (pix.width, pix.height),
            pix.samples
        )

        image.save(
            output_path,
            "JPEG",
            quality=JPEG_QUALITY,
            optimize=True
        )

        manifest.append({
            "page": page_number,
            "filename": filename,
            "width": pix.width,
            "height": pix.height
        })

        if page_number % 10 == 0:
            print(f"Processed {page_number}/319 pages")

    # Save page information
    with open(MANIFEST_PATH, "w") as file:
        json.dump(manifest, file, indent=2)

    doc.close()

    print("\nExtraction complete!")
    print(f"Total pages: {len(manifest)}")
    print(f"Images saved to: {OUTPUT_DIR}")
    print(f"Manifest saved to: {MANIFEST_PATH}")

if __name__ == "__main__":
    main()
