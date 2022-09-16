import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler
# ?
url = 'https://www.musee-orsay.fr/fr'
exb_nums = 3
titles_selector = ".field--name-title"
dates_selector = ".surtitle" 
thumbnails_selector = "picture img"
details_links_selector = ".card-shadow a"
details_content_selector = ".field--name-field-chapo"
category = "museum"

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