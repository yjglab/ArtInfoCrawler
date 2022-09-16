import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://museudafotografia.com.br/exposicoes/'
exb_nums = 4
titles_selector = ".news:nth-of-type(1) li > span > p"
dates_selector = "meta"
thumbnails_selector = ".news:nth-of-type(1) li"
details_links_selector = ".news:nth-of-type(1) li > span > a"
details_content_selector = ".intro"
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