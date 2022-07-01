import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://designmuseum.dk/en/exhibition/'
exb_nums = 1
titles_selector = ".vertical-fade__article__heading"
dates_selector = ".vertical-fade__time"
thumbnails_selector = ".vertical-fade__image img"
details_links_selector = ".vertical-fade__article__arrow a"
details_content_selector = ".exhibition__text-image__row__text"
category = "museum"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,category
    )