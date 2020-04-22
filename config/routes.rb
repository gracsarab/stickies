Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # => & root are equivalent " 'get stickies/board' => 'stickies#board' is the same as get 'stickies/board' root 'stickies#board' "
  get 'stickies/board' => 'stickies#board'
  get 'stickies/new' => 'stickies#new'
  resources :stickies


end
 