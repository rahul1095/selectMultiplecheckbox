Rails.application.routes.draw do
  resources :products do
  	collection do
  		get :download	
  	end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
