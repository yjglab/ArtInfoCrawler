import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.mnw.art.pl/en/temporary-exhibitions/'
exb_nums = 4
titles_selector = ".news .news-content .title"
dates_selector = ".news .news-content .desc"
thumbnails_selector = ".news img"
details_links_selector = ".news .news-content .title > a"
details_content_selector = ".desc-module"
category = "gallery"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )