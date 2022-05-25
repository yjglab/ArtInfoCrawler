import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://rietberg.ch/en/exhibitions'
exb_nums = 3
titles_selector = ".c-title__title--exhibition"
dates_selector = ".c-teaser__date--left"
thumbnails_selector = ".c-teaser__img-container img"
details_links_selector = ".c-teaser"
details_content_selector = ".c-exhibition-info__text > p"
category = ""
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )