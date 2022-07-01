import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.artic.edu/exhibitions'
exb_nums = 8
titles_selector = ".m-listing--w-meta-bottom .title"
dates_selector = ".m-listing--w-meta-bottom .f-secondary"
thumbnails_selector = ".m-listing__img img"
details_selector = ".m-listing__link"
details_content_selector = ".o-article__body > p"
category = "gallery"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_selector,
    details_content_selector,
    category,
    )