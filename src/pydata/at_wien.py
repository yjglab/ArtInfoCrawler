import infoCrawler

url = 'https://www.wienmuseum.at/en/exhibitions/current-exhibitions'
titles_selector = ".margin-bottom > a"
dates_selector = ".col-md-8 > p > strong"

infoCrawler.print_msm_data(url, titles_selector, dates_selector)