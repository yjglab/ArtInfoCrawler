import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.kyohaku.go.jp/eng/exhibitions/'
exb_nums = 2
titles_selector = ".exhibitionList__title"
dates_selector = ".exhibitionList__date"
thumbnails_selector = ".exhibitionList__img img"
details_links_selector = ".exhibitionList__item > a"
details_contents_selector = ".bottomZero .contents .wallBelt > p" 
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    )

