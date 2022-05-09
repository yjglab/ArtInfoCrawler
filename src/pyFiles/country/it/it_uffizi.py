import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.uffizi.it/categoria-eventi/mostre'
exb_nums = 4
titles_selector = ".card-showcase__title"
dates_selector = ".card-showcase__text"
thumbnails_selector = ".card-showcase__image img"
details_links_selector = ".card-showcase"
details_content_selector = ".page-heading__text"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )