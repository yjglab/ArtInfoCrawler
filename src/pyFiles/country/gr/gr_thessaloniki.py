import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.amth.gr/en/exhibitions/temporary'
exb_nums = 4
titles_selector = ".tile__title"
dates_selector = ".tile__date"
thumbnails_selector = ".tile__image > img"
details_links_selector = ".tile__link"
details_content_selector = "#main div.text"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )