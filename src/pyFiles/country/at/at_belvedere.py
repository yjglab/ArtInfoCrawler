import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.belvedere.at/ausstellungen-aktuell'
exb_nums = 9
titles_selector = ".link--full"
dates_selector = ".link--full"
thumbnails_selector = ".teaser__node__item__image-background"
details_links_selector = ".link--full"
details_content_selector = "#block-hauptseiteninhalt > article > div.grid-wrapper > div > div"
category = "gallery"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    category,
    )