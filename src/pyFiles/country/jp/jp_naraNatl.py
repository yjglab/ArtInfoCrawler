import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.narahaku.go.jp/english/exhibition_cat/special/'
exb_nums = 2
titles_selector = ".exhibition-box .exhibition-txt"
dates_selector = ".exhibition-box div p:nth-child(3)"
thumbnails_selector = ".wp-block-image img"
details_links_selector = ".wp-block-button__link"
details_contents_selector = ".wp-block-columns .wp-block-column > p" 
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    )

